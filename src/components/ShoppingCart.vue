<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length"><i>Please add some products to cart.</i></p>
        <ul>
            <li
                    v-for="product in products"
                    :key="product.id">
                {{ product.title }} - {{ product.price }} x {{ product.quantity }}
            </li>
        </ul>
        <p>Total: {{ total }}</p>
        <p><button @click="checkout(products)">Checkout</button></p>
        <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </div>
</template>

<script>
    import { mapGetters, mapState, createNamespacedHelpers } from 'vuex'
    const {mapActions: cartItems} = createNamespacedHelpers('cart')
    export default {
        name: "ShoppingCart",
        computed: {
            ...mapState({
                checkoutStatus: state => state.cart.checkoutStatus
            }),
            ...mapGetters('cart', {
                products: 'cartProducts',
                total: 'cartTotalPrice'
            })
        },
        created(){
            this.$store.dispatch('products/getAllProducts')
            this.$store.dispatch('cart/checkout')
        },
        methods: {
            checkout (products) {
                console.log('checkout step one')
                this.$store.dispatch('cart/checkout', products)
            },
            ...cartItems({
                checkout: 'checkout'
            })
        }
    }
</script>

<style scoped>

</style>