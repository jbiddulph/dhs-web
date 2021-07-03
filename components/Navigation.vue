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
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              Search
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">
              EN
            </b-dropdown-item>
            <b-dropdown-item href="#">
              ES
            </b-dropdown-item>
            <b-dropdown-item href="#">
              RU
            </b-dropdown-item>
            <b-dropdown-item href="#">
              FA
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
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
      console.log('res:', res.data)
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
