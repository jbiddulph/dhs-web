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
    <div v-if="page.linkname == 'Venues'">
      <Venues />
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    const settings = await $axios.$get('http://moapi.test/api/settings')
    const page = await $axios.$get(`http://moapi.test/api/pages/${params.slug}`)
    const location = await $axios.$get(`http://moapi.test/api/locations/${params.location}`)
    console.log('location: ', location)
    return { settings, page, location }
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
