<template>
  <Loader v-if="!isLoaded" />
  <div id="app" v-else>
    <Navbar :itemsInCart="itemsInCart" />
    <b-container>
      <b-row v-if="itemsInStore">
        <h1>{{message}}</h1>
        <b-col col xs="6" sm="6" md="4" lg="3" v-for="item in itemsInStore" :key="item.id"  >
          <ShopItem :data="item" :addToCart="addToCart"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ShopItem from './components/ShopItem.vue'
import Loader from "./components/Loader";

const axios = require('axios');

export default {
  name: 'App',
  components: {
    Loader,
    Navbar,
    ShopItem
  },
  data() {
    return {
      isLoaded: false,
      itemsInStore: [],
      itemsInCart: [],
      message: 'Hello world!'
    }
  },
  beforeMount() {
    setTimeout(()=>{
      this.isLoaded = true
    }, 2000)
    axios.get('https://fakestoreapi.com/products?limit=6')
    .then(response => {
      const transformed = response.data.map(el => {
         return {...el, quantity: 0}
      })
      this.itemsInStore = transformed;
    })
  },
  methods: {
    addToCart(item) {
      let isInCart = this.itemsInCart.filter((el) => el.id === item.id);
      if (isInCart.length > 0) {
        ++isInCart[0].quantity
      } else {
        ++item.quantity;
        this.itemsInCart.push(item)
      }
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .card-deck {
    display: flex;
  }
</style>
