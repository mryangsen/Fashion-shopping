const cart = {
	namespaced: true,
	state: {
		buy: []
	},
	mutations: { 
		// 解构出来 至少有个id和count
   		addToBuy(state,obj){
			//如果buy没有 则添加 有的话 
			if(!state.buy.some(item=>item.id==obj.id)){
				state.buy.push(obj)
			}else{
				var item = state.buy.find(item=>item.id == obj.id);
				item.count += obj.count;
			}
		} ,
		//根据id增加count
		insCount(state,id){
			var item = state.buy.find(item=>item.id == id);
			item.count ++;
		},
		desCount(state,id){
			var item = state.buy.find(item=>item.id == id);
			item.count --;
		}
    },
	actions: { 
		

    },
	getters: { 

	}
}
export default cart