<template>
  <div class="venues">
    <div v-for="venue in venues" :key="venue.id">
      <div class="container venue">
        <p>{{ venue.venuename }}</p>
        <p><NuxtLink :to="`locations/${venue.town}`">{{ venue.town }}</NuxtLink></p>
        <p>{{ venue.county }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      venues: []
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const venues = await axios.get('http://moapi.test/api/venues', config)
      this.venues = venues.data.data
    } catch (err) {
      console.log(err)
    }
  },
  head () {
    return {
      title: 'Venues',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'List of venues and pubs in Sussex'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
