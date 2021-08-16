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
    <div class="venues mb-4">
      <!-- <h2>Here we are: {{ town }}</h2> -->
      <div v-for="venue in location" :key="venue.id">
        <div class="container venue">
          <h5>
            <NuxtLink :to="`/venue/${venue.id}`">
              {{ venue.venuename }}
            </NuxtLink>
          </h5>
          <p>
            {{ venue.town }}
          </p>
          <p>{{ venue.county }}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    const settings = await $axios.$get('https://www.jbiddulph.com/api/settings')
    // const page = await $axios.$get(`https://www.jbiddulph.com/api/pages/${params.slug}`)
    const location = await $axios.$get(`https://www.jbiddulph.com/api/locations/${params.location}`)
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

<style lang="scss" scoped>
.venues {
  margin-top:60px;
}
</style>
