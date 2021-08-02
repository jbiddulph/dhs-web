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
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    const settings = await $axios.$get('https://www.jbiddulph.com/api/settings')
    const page = await $axios.$get('https://www.jbiddulph.com/api/pages/home')
    return { settings, page }
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
