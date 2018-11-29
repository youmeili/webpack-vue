<template>
    <div>
        <ul>
            <li
                    v-for="product in products"
                    :key="product.id">
                {{ product.title }} - {{ product.price }} x {{ product.quantity }}
            </li>
        </ul>
    </div>
    
</template>

<script>
    import { mapGetters, mapState } from 'vuex'
    export default {
        name: "Connect",
        computed:{
            ...mapState({
                products: state => state.products.all
            })
        }
    }
</script>

<style scoped>

</style>