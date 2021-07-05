<template>
  <div class="dhs-bg d-flex">
    <b-container>
      <img
        :src="'http://dhs-api.test/storage/'+logo"
      >
      <span class="telephone">{{ telephone }}</span>
    </b-container>
  </div>
</template>

<script>
export default {
  props: [
    'logo',
    'telephone'
  ]
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
.dhs-bg {
    display: flex;
    background-color: $dhsblue;
    padding: 20px 0;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            color:$white;
            font-size: 1.8rem;
            font-weight: bold;
            .telephone {
            }
        }
    }
}
.container {
    max-width: 1150px;
    margin:0 auto;
}
</style>
