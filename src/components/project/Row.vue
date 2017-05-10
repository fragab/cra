<template>
  <tr @dblclick="toggleEditing">
    <td>
      <span v-if="!editing">{{ project.name }}</span>
      <input
        v-show="editing"
        :class="['input', {'is-danger': hasNameError}]"
        ref="name"
        type="text"
        v-model="project.name"
        @keyup.esc="toggleEditing"
      />
      <p v-if="hasNameError" class="help is-danger">Le nom du projet n'est pas valide</p>
    </td>
    <td>
      <span v-if="!editing">{{ project.client.name }}</span>
      <template v-if="editing">
        <span class="select">
          <select v-model="project.client">
            <option v-for="client in clients" :value="client">{{ client.name }}</option>
          </select>
        </span>
      </template>
    </td>
    <td>
      <a v-if="!editing" class="button is-danger is-outlined" @click.stop.prevent="confirmDelete(project)">X</a>
      <button v-if="editing" class="button is-info" @click="update">OK</button>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'project_row',
  data () {
    return {
      editing: null,
      hasNameError: false
    }
  },
  props: [
    'project'
  ],
  methods: {
    toggleEditing () {
      if (this.editing && !this.checkName()) {
        return
      }
      this.editing = !this.editing
    },
    update () {
      if (!this.checkName()) {
        this.hasNameError = true
        return
      }
      this.updateProject(
        {
          project: this.project,
          name: this.project.name,
          client: this.project.client
        }
      )
      this.editing = this.hasNameError = false
    },
    confirmDelete () {
      if (confirm('Supprimer "' + this.project.name + '" ?')) {
        this.deleteProject({project: this.project})
      }
    },
    checkName () {
      this.hasNameError = this.project.name.trim() === ''
      return !this.hasNameError
    },
    ...mapMutations([
      'deleteProject',
      'updateProject'
    ])
  },
  watch: {
    editing () {
      if (this.editing) {
        this.$nextTick(() => { this.$refs.name.focus() })
      }
    }
  },
  computed: {
    clients () {
      return this.$store.state.clients
    }
  }
}
</script>
