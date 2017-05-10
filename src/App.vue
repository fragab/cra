<template>
  <div id="app" class="section">
    <div class="container is-fluid">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <div class="box tile is-child">
                <p class="title">Projets</p>
                <project></project>
              </div>
              <div class="box tile is-child">
                <p class="title">Clients</p>
                <p>
                  <client></client>
                </p>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="box tile is-child">
                <p class="title">Activité</p>
                <p>
                  <activity-new></activity-new>
                </p>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from './components/Project'
import Client from './components/Client'
import ActivityNew from './components/activity/New'

export default {
  name: 'app',
  components: {
    Project,
    Client,
    ActivityNew
  }
}
</script>
