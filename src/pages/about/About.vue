Bar.vue
Doc.vue
Foo.vue
Home.vue<template>
    <!--<transition name="about">-->
        <div>This is About page</div>
    <!--</transition>-->
</template>

<script>
    export default {
        name: "About",
        beforeRouteEnter: function (to, from, next) {
            next();
        },
        created: function(){
            console.log(this.$route);
        }
    }
</script>

<style scoped>

    *{
        color: red;
    }
</style>