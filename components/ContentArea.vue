<template>
  <div>
    <div class="container">
      <b-row>
        <b-col sm="7">
          <p>a:{{ title }}</p>
          <p>b:{{ description }}</p>
          <!-- eslint-disable vue/no-v-html -->
          <div v-html="content" />
          <!--eslint-enable-->
        </b-col>
        <b-col sm="5">
          <img :src="`https://www.jbiddulph.com/storage/`+image" width="300">
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import { mapState, mapActions } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    showServices: {
      type: Boolean,
      default: false
    },
    showAccreditations: {
      type: Boolean,
      default: false
    },
    showCategories: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // pages: [],
      currentPage: ''
    }
  }
  // async created () {
  //   this.currentPage = this.$route.name
  //   console.log('page: ', this.currentPage)
  //   const config = {
  //     headers: {
  //       Accept: 'application/json'
  //     }
  //   }
  //   try {
  //     const res = await axios.get('https://www.jbiddulph.com/api/pages/' + this.currentPage, config)
  //     console.log('res:', res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },
  // computed: mapState(['pages']),
  // methods: {
  //   ...mapActions(['getPages'])
  // }
}
</script>

<style lang="scss" scoped>

</style>
