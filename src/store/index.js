import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import order from './modules/order'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
        cart,
        order
	}
})

export default store;
