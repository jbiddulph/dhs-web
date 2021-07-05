<template>
  <div>
    <Navigation />
    <TopHeader />
    <Carousel />
    <MidBlocks />
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
  async asyncData ({ params, $axios }) {
    const settings = await $axios.$get('http://dhs-api.test/api/settings')
    const page = await $axios.$get(`http://dhs-api.test/api/pages/${params.slug}`)
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
