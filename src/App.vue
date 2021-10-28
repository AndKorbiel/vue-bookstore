<template>
  <Loader v-if="!isLoaded" />
  <div id="app" v-else>
    <Navbar :itemsInCart="this.allItemsInCart" />
    <b-container>
      <b-row v-if="this.allAvailableItems">
        <h1>{{message}}</h1>
        <b-col col xs="6" sm="6" md="4" lg="3" v-for="item in this.allAvailableItems" :key="item.id"  >
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
import { mapGetters, mapActions, mapMutations } from 'vuex';

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
      message: 'Welcome to our extended bookstore'
    }
  },
  computed: {
    ...mapGetters(['allAvailableItems', 'allItemsInCart'])
  },
  beforeMount() {
    setTimeout(()=>{
      this.isLoaded = true
    }, 2000)
    this.fetchItems();
  },
  methods: {
    addToCart(item) {
      this.addItemToCart(item)
    },
    ...mapActions(['fetchItems']),
    ...mapMutations(['addItemToCart'])
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
