<template>
  <div>
    <Navigation
      :sitename="settings.website_name"
    />
    <TopHeader
      :logo="settings.logo"
      :slogan="settings.slogan"
    />
    <Carousel />
    <!-- <MidBlocks /> -->
    <ContentArea
      :title="page.title"
      :description="page.description"
      :content="page.content"
      :image="page.image"
    />
    <div v-if="page.linkname == 'Venues'" class="venues">
      <div v-for="venue in venuelist.data" :key="venue.id">
        <Venues
          :name="venue.venuename"
          :town="venue.town"
          :county="venue.county"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    const settings = await $axios.$get('http://moapi.test/api/settings')
    const venues = await $axios.get('http://moapi.test/api/venues')
    const page = await $axios.$get(`http://moapi.test/api/pages/${params.slug}`)
    const venuelist = venues.data
    return {
      settings,
      page,
      venuelist
    }
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        }
      ]
    }
  }
}
</script>
