<template>
  <b-card
      :title="data.title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      col lg="2"
  >
    <span class="price">${{ data.price }}</span>
    <b-card-text>
      {{ data.descirption }}
    </b-card-text>
    <b-button href="#" variant="primary">Add to cart</b-button>
  </b-card>
</template>

<script>
  export default {
    name: 'ShopItem',
    props: {
      data: Object
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
</style>