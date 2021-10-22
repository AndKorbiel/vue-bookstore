<template>
  <div>
    <b-modal id="cart-modal" title="Cart">
      <ul v-for="item in itemsInCart" :key="item.id">
        <li>{{ item.title }}</li>
        <li>${{ item.price }}</li>
        <li>{{ item.quantity }}</li>
      </ul>
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: 'CartModal',
    props: {
      itemsInCart: Array
    }
  }
</script>

<style scoped>

</style>