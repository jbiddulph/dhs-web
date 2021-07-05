<template>
  <div>
    <Navigation
      :sitename="settings.website_name"
    />
    <TopHeader
      :logo="settings.logo"
      :telephone="settings.telephone"
    />
    <Carousel />
    <MidBlocks />
    {{ settings }}
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
    const settings = await $axios.$get('http://dhs-api.test/api/settings')
    const page = await $axios.$get('http://dhs-api.test/api/pages/home')
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
