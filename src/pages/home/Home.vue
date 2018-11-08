<template>
    <!--<transition name="home">-->
        <div>
            <p :class="{a: isRed}">This is Home page</p>
            <Doc />
            <p>{{docs}}</p>
            <ul>
                <li v-for="list in lists">{{list.familyName}}</li>
            </ul>
            <!--<img src="../../assets/images/ban_img1.jpg"/>-->
            <router-view></router-view>
        </div>
    <!--</transition>-->
</template>

<script>
    import Doc from './Doc';
    import axios from 'axios';
    import http from '../../fetch/http';
    export default {
        name: "Home",
        data(){
            return {
                isRed: true,
                docs: Doc.__docs,
                lists: []
            }
        },
        components: {
            Doc
        },
        beforeRouteEnter: function (to, from, next) {
            next();
        },
        created: function(){
            const url = '/anchorWithSalary/list';
            const params = {
                currentPage: 1,
                pageSize: 20,
                month: "2018-10"
            };
            http.post(url , params).then(res => {
                console.log('res', res);
                this.lists = res.list;
            }).catch(error => {
                console.log('error', error);
            });
        }
    }
</script>

<style scoped>
    .a{
        color: red;
    }
</style>