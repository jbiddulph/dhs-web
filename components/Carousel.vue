<template>
  <div class="d-flex w-100 carousel">
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
    xherex:{{ selectedLoctaion }}
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <div v-for="headers in allHeaders" :key="headers.id">
        <div v-for="header in headers.data" :key="header.id">
          <b-carousel-slide>
            <template #img>
              <div v-if="selectedLoctaion">
                <h2>{{ selectedLoctaion }}</h2>
                <h3>{{ header.title }}</h3>
                <h4>{{ header.description }}</h4>
              </div>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                :src="'https://www.jbiddulph.com/storage/'+header.image"
                :alt="header.title"
              >
            </template>
          </b-carousel-slide>
        </div>
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
  // props: [
  //   'location'
  // ],
  name: 'carousel',
  props: ['location'],
  data () {
    return {
      slide: 0,
      sliding: null,
      selectedLoctaion: ''
    }
  },
  computed: mapGetters(['allHeaders']),
  created () {
    console.log('thislocation: ', this.location)
    this.fetchLocationHeaders(this.location)
  },
  mounted () {
    this.selectedLoctaion = this.location
  },
  methods: {
    ...mapActions([
      // 'fetchHeaders',
      'fetchLocationHeaders'
    ]),
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    flex-direction: column;
    object-fit: contain;
    height: 100vh;
    display: flex;
  }
  .carousel-inner > .item {
    height: auto;
    img {
      height: 100vh;
    }
  }
  .carousel-item {
    img {
      height: auto;
      display: flex;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 768px) {
    .carousel {
      height: 208px;
    }
    .carousel-item {
      img {
        height: 208px;
        display: flex;
        object-fit: cover;
      }
    }
  }
</style>
