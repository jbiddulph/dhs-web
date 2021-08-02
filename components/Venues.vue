<template>
  <div>
    <div class="container venue">
      <p>{{ name }}</p>
      <p><NuxtLink :to="`locations/${town}`">{{ town }}</NuxtLink></p>
      <p>{{ county }}</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  props: [
    'name',
    'town',
    'county'
  ],
  async created () {
    // const config = {
    //   headers: {
    //     Accept: 'application/json'
    //   }
    // }
    // try {
    //   const venues = await axios.get('https://www.jbiddulph.com/api/venues', config)
    //   this.venues = venues.data.data
    // } catch (err) {
    //   console.log(err)
    // }
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
