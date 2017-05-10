<template>
  <div class="project_new">
    <button
      @click="showModalNew = !showModalNew"
      class="button is-info"
    >
      Nouveau projet
    </button>
    <div :class="['modal', {'is-active': showModalNew}]">
      <div class="modal-background" @click="showModalNew = false"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content">
            <h1>Nouveau projet</h1>
          </div>
          <form @submit.prevent="addProject">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Client</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="client">
                        <option v-for="client in clients" :value="client">{{ client.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Nom</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <input :class="['input', {'is-danger': hasNameError}]" type="text" v-model="projectName" />
                  </div>
                </div>
              </div>
              <p v-if="hasNameError" class="help is-danger">Le nom du projet n'est pas valide</p>
            </div>
            <p class="control is-unselectable">
              <button class="button is-info">
                Enregistrer
              </button>
            </p>
          </form>
        </div>
      </div>
      <button class="modal-close" @click="showModalNew = false"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project_new',
  data () {
    return {
      projectName: '',
      client: null,
      hasNameError: false,
      showModalNew: false
    }
  },
  methods: {
    addProject () {
      if (!this.checkName()) {
        return
      }
      this.$store.commit('addProject', { name: this.projectName, client: this.client })
      this.projectName = ''
      this.client = null
      this.addNameError = false
      this.showModalNew = false
    },
    checkName () {
      this.hasNameError = this.projectName.trim() === ''
      return !this.hasNameError
    }
  },
  computed: {
    clients () {
      return this.$store.state.clients
    }
  }
}
</script>
