<template>
    <div>
        <div>
            <router-link to="/home">Home</router-link>
            <router-link to="/home/foo">foo</router-link>
            <router-link to="/home/bar">bar</router-link>
            <router-link to="/about/123?usrId=111111111">About</router-link>
        </div>
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