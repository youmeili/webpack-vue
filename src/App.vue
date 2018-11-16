<template>
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-sm-2 col-xs-9">
                        <div class="loge_area">
                            <img src="./assets/images/core-img/logo.png" alt="">
                        </div>
                    </div>
                    <div class="col-sm-10 col-xs-12">
                        <nav class="main_menu_area">
                            <ul>
                                <li><router-link to="/home">HOME</router-link></li>
                                <li><router-link to="/about">ABOUT</router-link></li>
                                <li><router-link to="/service">SERVICE</router-link></li>
                                <li><router-link to="/advisor">ADVISOR</router-link></li>
                                <li><router-link to="/work">WORK</router-link></li>
                                <li><router-link to="/price">PRICE</router-link></li>
                                <li><router-link to="/blog">BLOG</router-link></li>
                                <li><router-link to="/contact">CONTACT</router-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "App",
        data: function(){
            return {
                transitionName: "fade"
            }
        },
        watch:{
            '$route'(to, from){
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    }
</script>

<style scoped>

</style>