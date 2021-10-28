<template>
  <div>
    <b-modal id="cart-modal" title="Cart" ok-only ok-title="Close">
      <div v-for="item in this.allItemsInCart" :key="item.id">
        <b-card
            :title="item.title"
            :img-src="item.image"
            img-alt="Image"
            img-left
            col lg="2"
        >
          <p>Price: <b>${{ item.price }}</b></p>
          <p>Quantity: <b>{{ item.quantity }}</b></p>
          <p>Total: <b>${{item.price * item.quantity}}</b></p>
          <div class="action-row">
            <b-button>-</b-button>
            <b-button>+</b-button>
          </div>
        </b-card>
      </div>
      <hr />
      <h3>Total</h3>
      <p>Quantity: <b>{{ totalQuantity }}</b></p>
      <p>Price: <b>${{ totalPrice }}</b></p>
    </b-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'CartModal',
    computed: {
      ...mapGetters(['allItemsInCart']),
      totalPrice: function () {
        let temp = 0;
        this.allItemsInCart.forEach(item => {
          temp = temp + (item.price * item.quantity)
        })
        return temp
      },
      totalQuantity: function() {
        let temp = 0;
        this.allItemsInCart.forEach(item => {
          temp = temp + item.quantity
        })
        return temp
      }
    }
  }
</script>

<style scoped>
.card-img-left {
  height: 90px;
  width: 90px;
  min-width: 90px;
  margin: 10px 30px 10px 10px;
}

.action-row {
  display: flex;
}

.btn {
  min-width: 50px;
  margin-right: 15px;
}

.card-title {
  font-size: 18px;
}

.p {
  margin-bottom: 0;
}
</style>