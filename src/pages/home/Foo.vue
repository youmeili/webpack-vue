<template>
    <div>This is {{name | capitalize("up")}}</div>
</template>

<script>
    export default {
        name: "Foo",
        data: function(){
            return {
                name: "foo"
            }
        },
        filters: {
            capitalize: function(value, param1){
                if(!value) return "";
                console.log(value, param1);
                value = value.toString();
                return value.toLocaleUpperCase();
            }
        }
    }
</script>

<style scoped>

</style>