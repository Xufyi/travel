import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,


	// actions:{
		// changeCity(ctx,city){
			// 这里的ctx就是$store对象，this指向actions
			// console.log(ctx,this)
			// ctx.commit('change',city)
		// }
	// },

	//因为简单的数据同步方法，所以用下面的代码就行

	getters:{
		doubleCity(state){
			console.log(state)
			return state.city + " " + state.city
		}
	}
	
})