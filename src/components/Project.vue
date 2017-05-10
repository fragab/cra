<template>
  <div class="project">
    <new></new>
    <table class="table">
      <tbody>
        <row v-for="project in projects" :project="project" :key="project['.key']"></row>
      </tbody>
    </table>
  </div>
</template>

<script>
import New from './project/New'
import Row from './project/Row'
export default {
  name: 'project',
  computed: {
    projects () {
      return this.$store.state.projects
    }
  },
  components: {
    New,
    Row
  }
}
</script>
