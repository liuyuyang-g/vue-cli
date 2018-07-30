<template>
    <div>
        
        <h2>一个主页</h2>
        <h3>计算属性count  {{count}}</h3>
        <h3>{{$store.state.count}}</h3>
        <button @click="$store.commit('add',20)">1: click加1</button>
        <p></p>
        <button @click="add(20)">2: click加1</button>
        <p></p>
        <h3>getters: {{count1}}</h3>
        <br>
        <button @click="addAction(100)">3: click</button>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'   
    export default {
        store,
        /* computed:{
            count(){
                return this.$store.state.count;
            }
        } */
        /* computed:{
            count:state => state.count
        } */
        computed: {
            ...mapState(['count']),
            ...mapGetters(['count1'])
        },
        methods: {
            ...mapMutations(['add']),
            ...mapActions(['addAction'])
        }
    }
</script>

<style scoped>

</style>