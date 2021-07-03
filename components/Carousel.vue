<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <div v-for="header in allHeaders" :key="header.id">
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              :src="'http://dhs-api.test/storage/'+header.image"
              :alt="header.title"
            >
          </template>
        </b-carousel-slide>
      </div>
    </b-carousel>
    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      image1: require('@/assets/banners/water-softener.png'),
      image2: require('@/assets/banners/worcester-hitachi-finance.png'),
      image3: require('@/assets/banners/boiler-warranty.png')
    }
  },
  methods: {
    ...mapActions(['fetchHeaders']),
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  computed: mapGetters(['allHeaders']),
  created () {
    this.fetchHeaders()
  }

}
</script>
