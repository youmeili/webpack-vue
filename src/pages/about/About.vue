<template>
    <!--<transition name="about">-->
        <div>
            <p>This is About page</p>
            <ShoppingCart />
        </div>
    <!--</transition>-->
</template>

<script>
    import {Button, Cell, Dialog} from "vant"
    import ShoppingCart from '../../components/ShoppingCart'
    export default {
        name: "About",
        components: {
            Dialog,
            ShoppingCart
        },
        data() {
            return {
                show: true
            };
        },
        beforeRouteEnter: function (to, from, next) {
            next();
        },
        created: function(){
            console.log(this.$route);
        },
        mounted() {
            // Dialog.alert({
            //   title: '标题',
            //   message: '弹窗内容'
            // }).then(() => {
            //   // on close
            // });
        },
        methods: {
            beforeClose(action, done) {
                if (action === 'confirm') {
                    setTimeout(done, 1000);
                } else {
                    done();
                }
            }
        }
    }
</script>

<style scoped>

    *{
        color: red;
    }
</style>