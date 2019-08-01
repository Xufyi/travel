
export default {
	change(state,city){
		console.log('本次存储中的地址 ' + localStorage.city)
		state.city = city

		try{
			//存储在localStorage
			localStorage.city = city
		}catch(e){}
	}
}