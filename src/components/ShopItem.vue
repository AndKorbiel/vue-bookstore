<template>
  <b-card
      :title="data.title"
      :img-src="data.image"
      img-alt="Image"
      img-top
      tag="article"
      col lg="2"
  >
    <span class="price">${{ data.price }}</span>
    <b-card-text>
      {{ data.descirption }}
    </b-card-text>
    <b-button href="#" variant="primary" v-on:click="addToCart(data)">Add to cart</b-button>
  </b-card>
</template>

<script>
  export default {
    name: 'ShopItem',
    props: {
      data: Object,
      addToCart: Function
    }
  }
</script>

<style scoped>
  .price {
    font-weight: bold
  }
  .card {
    margin: 10px 0;
  }
  img {
    width: fit-content;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    max-width: 210px;
  }
  .card-title {
    font-size: 18px;
  }
</style>