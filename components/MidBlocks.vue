<template>
  <div class="bg-blue">
    <b-container class="mid-blocks d-flex w-100">
      <img :src="require(`@/assets/images/box1.png`)">
      <img :src="require(`@/assets/images/box2.png`)">
      <img :src="require(`@/assets/images/box3.png`)">
      <img :src="require(`@/assets/images/box4.png`)">
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
.bg-blue {
    background-color: $primary;
}
.mid-blocks {
    display: flex;
    background-color: $primary;
    padding: 20px 0;
    justify-content:center;
    list-style-type: none;
    .row {
        .col {
            img {
                align-content: center;
                padding: 10px 0;
            }
        }
    }
}
</style>
