<template>
  <div class="client">
    <form @submit.prevent="addClient">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Nouveau client" v-model="clientName" />
        </p>
        <p class="control">
          <button class="button is-info">
            Ajouter
          </button>
        </p>
      </div>
    </form>
    <ul>
      <li v-for="client in clients">{{ client.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'client',
  data () {
    return {
      clientName: ''
    }
  },
  methods: {
    addClient () {
      console.log('addClient')
      if (this.clientName.trim()) {
        this.$store.commit('addClient', { name: this.clientName })
      }
      this.clientName = ''
    }
  },
  computed: {
    clients () {
      return this.$store.state.clients
    }
  }
}
</script>
