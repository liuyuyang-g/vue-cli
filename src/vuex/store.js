import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {  //state用来存值
    count:1,
    num:20
}
const mutations={  //mutations(同步操作)用来修改值，相当于方法
    add(state,num){
        state.count += num;
    }
};

const getters = {  //getters相当于计算属性
    count1(state){
        return state.count+state.num
    }
};

const actions = {  //actions异步操作,最终还是会调用mutations
    addAction({commit},x){
        commit('add',x);
    }
}

export default new Vuex.Store({  //暴露出去
   state,
   mutations,
   getters,
   actions
});