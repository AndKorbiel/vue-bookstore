<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-container fluid>
        <b-navbar-brand href="#">Vue Bookstore</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-badge pill variant="primary" class="cart-info" v-if="itemsInCart">{{ itemsInCart }}</b-badge>
          <b-icon-cart font-scale="2"></b-icon-cart>
        </b-navbar-nav>
        </b-container>
      </b-navbar>
  </div>
</template>

<script>
  import { BIconCart } from 'bootstrap-vue'
  export default {
    name: 'CustomNavbar',
    components: {
      BIconCart
    },
    props: {
      itemsInCart: Number
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