const state = {
    items: [],
    checkoutStatus: null
}
const getters = {
    cartProducts: (state, getters, rootState) => {
        console.log('cartProducts getter')
        return state.items.map(({id, quantity}) => {
            console.log("root", rootState)
            const product = rootState.products.all.find(product => product.id === id)
            return product ? {
                title: product.title,
                price: product.price,
                quantity
            } : {}
        })
    },
    cartTotalPrice: (state, getters) => {
        console.log('cartTotalPrice getter')
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}
const actions = {
    async checkout ({commit, state}, products){
        const savedCartItems = [...state.items]
        console.log("checkout step two")
        commit('setCheckoutStatus', null)
        // commit('setCartItems', {items: []})
        // commit('setCheckoutStatus', 'failed')
        const _products = [
            {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
            {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
            {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
        ]

        commit('setCartItems', { items: _products })
    },
    addProductToCart ({ state, commit }, product) {
        commit('setCheckoutStatus', null)
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            commit('products/decrementProductInventory', { id: product.id }, { root: true })
        }
    }
}
const mutations = {
    pushProductToCart(state, {id}){
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, {id}){
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },
    setCartItems(state, {items}){
        state.items = items
    },
    setCheckoutStatus(state, status){
        state.checkoutStatus = status
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

