<template>
  <div id="app">
    <Navbar :itemsInCart="itemsInCart" />
    <b-container>
      <b-row>
        <h1>{{message}}</h1>
        <b-col col xs="6" sm="6" md="4" lg="3" v-for="item in availableItems" :key="item.id"  >
          <ShopItem :data="item" :addToCart="addToCart"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ShopItem from './components/ShopItem.vue'
const availableItems = [
  {id: 1, title: 'aa', price: 100, descirption: 'xxxxx dasdsa'},
  {id: 2, title: 'bb', price: 55, descirption: 'xxxxx dasdsa'},
  {id: 3, title: 'cc', price: 44, descirption: 'xxxxx dasdsa'},
  {id: 4, title: 'dd', price: 11, descirption: 'xxxxx dasdsa'},
  {id: 5, title: 'dd', price: 11, descirption: 'xxxxx dasdsa'},
  {id: 6, title: 'dd', price: 11, descirption: 'xxxxx dasdsa'},
]
export default {
  name: 'App',
  components: {
    Navbar,
    ShopItem
  },
  data() {
    return {
      itemsInCart: [],
      availableItems: availableItems,
      message: 'Hello world!'
    }
  },
  methods: {
    alertOnClick(e) {
      e.preventDefault()
      window.alert(this.message)
    },
    changeMessage() {
      this.message = 'New message'
    },
    addToCart(item) {
      this.itemsInCart.push(item)
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
