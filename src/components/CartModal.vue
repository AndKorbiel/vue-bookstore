<template>
  <div>
    <b-modal id="cart-modal" title="Cart">
      <ul v-for="item in this.allItemsInCart" :key="item.id">
        <li>{{ item.title }}</li>
        <li>${{ item.price }}</li>
        <li>{{ item.quantity }}</li>
      </ul>
    </b-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'CartModal',
    computed: {
      ...mapGetters(['allItemsInCart'])
    }
  }
</script>

<style scoped>

</style>