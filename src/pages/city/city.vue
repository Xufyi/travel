<template>
	<div >
		<CityHeader></CityHeader>
		<CitySearch :cities="cities"></CitySearch>
		<CityList :hotCities="hotCities" :cities="cities"></CityList>
	</div>
</template>

<script>
 	import CityHeader from "./components/Header.vue";
 	import CitySearch from "./components/search.vue";
 	import CityList from "./components/List.vue";
 	import axios from "axios";

	export default {
		data(){
			return{
				cities:'',
				hotCities:''
			}
		},
		components:{
			CityHeader,
			CitySearch,
			CityList
		},
		mounted(){
			this.getCityInfo();
		},
		methods:{
			getCityInfo(){
				//发送请求，获取数据
				axios.get('/api/city.json')
				.then(this.getCityInfoSucc)
			},
			getCityInfoSucc({data} = data){
				if(data.ret && data.data){
					this.cities = data.data.cities;
					this.hotCities = data.data.hotCities
				}
			}
		}
						
	}
</script>