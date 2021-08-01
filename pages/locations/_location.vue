<template>
  <div>
    <Navigation
      :sitename="settings.website_name"
    />
    <TopHeader
      :logo="settings.logo"
      :slogan="settings.slogan"
    />
    <Carousel
      :location="town"
    />
    <div class="venues">
      <h2>Here we are: {{ town }}</h2>
      <div v-for="venue in location" :key="venue.id">
        <div class="container venue">
          <p>{{ venue.venuename }}</p>
          <p><NuxtLink :to="`locations/${venue.town}`">{{ venue.town }}</NuxtLink></p>
          <p>{{ venue.county }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    const settings = await $axios.$get('http://moapi.test/api/settings')
    // const page = await $axios.$get(`http://moapi.test/api/pages/${params.slug}`)
    const location = await $axios.$get(`http://moapi.test/api/locations/${params.location}`)
    const town = params.location
    return { settings, location, town }
  },
  head () {
    return {
      title: 'Title here',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Description of page here'
        }
      ]
    }
  }
}
</script>
