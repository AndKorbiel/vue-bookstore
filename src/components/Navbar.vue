<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-container fluid>
        <b-navbar-brand href="#">Vue Bookstore</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-badge pill variant="primary" class="cart-info" v-if="itemsInCart.length > 0">{{ amountOfItemsInCart }}</b-badge>
          <b-icon-cart font-scale="2" v-b-modal.cart-modal></b-icon-cart>
        </b-navbar-nav>
        </b-container>
      </b-navbar>
      <CartModal />
  </div>
</template>

<script>
  import { BIconCart } from 'bootstrap-vue';
  import CartModal from './CartModal';

  export default {
    name: 'CustomNavbar',
    components: {
      BIconCart,
      CartModal
    },
    props: {
      itemsInCart: Array
    },
    computed: {
      amountOfItemsInCart() {
        let temp = 0;
        this.itemsInCart.forEach(el => {
          temp = temp + el.quantity
        })
        return temp
      }
    }
  }
</script>

<style scoped>
  .b-icon.bi {
    color: #fff;
  }
  .cart-info  {
    font-size: 18px;
    background: #159e85;
    border-radius: 40px;
    margin-right: 10px;
  }
</style>