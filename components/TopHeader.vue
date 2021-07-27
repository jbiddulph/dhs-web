<template>
  <div class="main-bg d-flex">
    <b-container>
      <img
        :src="'http://moapi.test/storage/'+logo"
        height="100"
      >
      <span class="slogan">{{ slogan }}</span>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: ''
    },
    slogan: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
.main-bg {
    display: flex;
    background-color: $primary;
    padding: 20px 0;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            color:$white;
            font-size: 2.4rem;
            font-weight: bold;
            .slogan {
              font-size: 2rem;
            }
        }
    }
}
.container {
    max-width: 1150px;
    margin:0 auto;
}
</style>
