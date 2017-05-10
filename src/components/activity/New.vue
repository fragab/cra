<template>
  <div class="project_new">
    <form @submit.prevent="addActivity">
      <div class="field">
        <label class="label">Projet</label>
        <p class="control">
          <span class="select">
            <select>
              <option v-for="project in projects" :value="project">{{ project.client.name }} / {{ project.name }}</option>
            </select>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label">Durée</label>
        <p class="control">
          <span class="select">
            <select>
              <option v-for="duration in durations" :value="duration">{{ duration }}</option>
            </select>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label">Jour</label>
        <p class="control">
          <datepicker placeholder="" :config="{ locale: l10n, dateFormat: 'd-m-Y', static: true }"></datepicker>
        </p>
      </div>
      <p class="control is-unselectable">
        <button class="button is-info">
          Enregistrer
        </button>
      </p>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vue-bulma-datepicker'
export default {
  name: 'activity_new',
  data () {
    return {
      durations: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  methods: {
    addActivity () {
      console.log('save')
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects
    },
    l10n () {
      return {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
          longhand: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
        },
        months: {
          shorthand: ['Janv', 'Févr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
          longhand: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
        }
      }
    }
  },
  components: {
    Datepicker
  }
}
</script>
