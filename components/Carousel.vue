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
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <div v-for="headers in allHeaders" :key="headers.id">
        <div v-for="header in headers.data" :key="header.id">
          <b-carousel-slide>
            <template #img>
              <div v-if="selectedLocation" class="carousel-slide">
                <h2>{{ selectedLocation }}</h2>
                <h3>{{ header.title }}</h3>
                <h4>{{ header.description }}</h4>
              </div>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                :src="'http://www.jbiddulph.com/storage/'+header.image"
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
  name: 'Carousel',
  props: {
    location: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      selectedLocation: ''
    }
  },
  computed: mapGetters(['allHeaders']),
  created () {
    this.fetchLocationHeaders(this.location)
  },
  mounted () {
    if (this.location !== null) {
      this.selectedLocation = this.location
    }
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
@import '../assets/styles/_variables.scss';
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
  .carousel-slide {
    position:relative;
    h2 {
      font-weight:lighter!important;
      font-size:3rem;
      position: absolute;
      top: 30px;
      left:0;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      color: #ffffff;
    }
    h3 {
      position: absolute;
      top: 150px;
      right:0;
      padding: 20px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background-color: rgba(152, 180, 0, 0.8);
    }
    h4 {
      position: absolute;
      top: 223px;
      right:0;
      padding: 20px;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      color: $primary;
      background-color: rgba(152, 180, 0, 0.8);
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
    .carousel-slide {
      h3 {
        display: none;
      }
      h4 {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 400px)  {
  }
</style>
