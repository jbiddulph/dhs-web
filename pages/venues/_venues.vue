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
      <div v-for="venue in venues.data" :key="venue.id">
        <div class="container venue">
          <p>
            {{ venue.venuename }}
          </p>
          <p>
            <NuxtLink :to="`locations/${venue.town}`">
              {{ venue.town }}
            </NuxtLink>
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
    const town = params.location
    const venues = await $axios.$get('https://www.jbiddulph.com/api/venues')
    return { settings, venues, town }
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
