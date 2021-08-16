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
      <!-- <h2>Here we are: {{ town }}</h2> -->
      <div v-for="venuedetails in venue" :key="venuedetails.id">
        <div class="container venue-details">
          <h2>
            {{ venuedetails.venuename }}
          </h2>
          <p>
            {{ venuedetails.town }}
          </p>
          <p>{{ venuedetails.county }}</p>
          {{ venuedetails }}
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
    const venue = await $axios.$get(`https://www.jbiddulph.com/api/venues/${params.venue}`)
    const town = 'Brighton'
    return { settings, venue, town }
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
