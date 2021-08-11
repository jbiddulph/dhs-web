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
    <!-- <MidBlocks /> -->
    <ContentArea
      :title="page.title"
      :description="page.description"
      :content="page.content"
      :image="page.image"
    />
    <Footer />
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    const settings = await $axios.$get('https://www.jbiddulph.com/api/settings')
    const page = await $axios.$get('https://www.jbiddulph.com/api/pages/home')
    const town = 'Brighton'
    return { settings, page, town }
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
