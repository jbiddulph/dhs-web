<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">
        <strong>Just Sussex</strong>
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
      const pages = await axios.get('http://moapi.test/api/pages', config)
      // const venues = await axios.get('http://moapi.test/api/venues', config)
      this.menu = pages.data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
