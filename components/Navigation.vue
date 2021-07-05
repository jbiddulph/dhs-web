<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">
        Domestic Heating Services
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="menulink in menu" :key="menulink.slug">
          <b-nav-item :href="menulink.slug">
            {{ menulink.linkname }}
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
      const res = await axios.get('http://dhs-api.test/api/pages', config)
      this.menu = res.data
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
