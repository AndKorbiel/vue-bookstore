import axios from "axios";

const state = {
    availableItems: [],
    itemsInCart: [],
};

const getters = {
    allAvailableItems: state => state.availableItems,
    allItemsInCart: state => state.itemsInCart
};

const actions = {
    fetchItems({ commit }) {
        axios.get('https://fakestoreapi.com/products?limit=6')
            .then(response => {
                const transformed = response.data.map(el => {
                    return {...el, quantity: 0}
                })
                commit('setAvailableItems', transformed)
            })
    },
};

const mutations = {
    setAvailableItems: (state, items) => {
        return state.availableItems = items
    },
    addItemToCart: (state, item) => {
        let currentState = state.itemsInCart;
        let isInCart = currentState.filter((el) => el.id === item.id);
        
        if (isInCart.length > 0) {
            ++isInCart[0].quantity
        } else {
            ++item.quantity;
            currentState.push(item)
        }
        
        return state.itemsInCart = currentState
    },
    removeItemFromCart: (state, item) => {
        let currentState = state.itemsInCart;
        let isInCart = currentState.filter((el) => el.id === item.id)

        if (isInCart[0].quantity > 1) {
            --isInCart[0].quantity
        } else {
            currentState = currentState.filter((el) => el.id !== item.id)
        }

        return state.itemsInCart = currentState
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}