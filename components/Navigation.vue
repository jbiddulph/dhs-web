<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">
        <strong>Splendid Sussex</strong>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="menulink in menu" :key="menulink.slug">
          <b-nav-item>
            <b-link :to="`/${menulink.slug}`">
              {{ menulink.linkname }}
            </b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      open: false,
      menu: {}
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const pages = await axios.get('https://www.jbiddulph.com/api/pages', config)
      // const venues = await axios.get('https://www.jbiddulph.com/api/venues', config)
      this.menu = pages.data
    } catch (err) {
      /* eslint-disable no-console */
      console.error(err)
      /* eslint-enable no-console */
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
