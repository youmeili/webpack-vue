<template>
    <!--<transition name="about">-->
        <div>
            <p>This is About page</p>
            <!--<div>-->
                <!--<van-dialog-->
                        <!--v-model="show"-->
                        <!--show-cancel-button-->
                        <!--:before-close="beforeClose"-->
                <!--&gt;-->
                   <!--这是一个弹框-->
                <!--</van-dialog>-->
            <!--</div>-->
        </div>
    <!--</transition>-->
</template>

<script>
    import {Button, Cell, Dialog} from "vant"
    export default {
        name: "About",
        components: {
            Dialog
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
            Dialog.alert({
              title: '标题',
              message: '弹窗内容'
            }).then(() => {
              // on close
            });
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