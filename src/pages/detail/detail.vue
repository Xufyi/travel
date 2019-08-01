<template>
	<div>
		<detail-banner 
			:sightName="sightName" 
			:bannerImg="bannerImg" 
			:gallaryImgs="gallaryImgs"
		>
		</detail-banner>
		<detail-header></detail-header>
		<detail-list :list="list" ></detail-list>
		<!-- 当前元素只是增加页面高度,模拟滚动的事件 -->
		<div class="scroll"></div>
	</div>
</template>

<style lang="scss" scoped>
	.scroll{
		height: 10rem;
	}
</style>


<script>
	import DetailBanner from "./components/banner.vue";
	import DetailHeader from "./components/header.vue";
	import DetailList from "./components/list.vue";
	import axios from "axios";

	export default{
		name:'detail',
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data(){
			return {
				list:[
					{title:'儿童票',children:[
						{title:'儿童票一级',children:[
							{title:'儿童票二级'}
						]}
					]},
					{title:'成人票'},
					{title:'学生票'},
					{title:'特惠票'},
				],
				sightName:"",
				bannerImg:"",
				categoryList:"",
				gallaryImgs:"",
			}
		},
		mounted(){
			axios.get('api/detail.json',{
				params:{
					id:this.$route.params.id
				}
			})
			.then(({data} = data)=>{
				console.log(data)
				this.sightName = data.data.sightName
				this.bannerImg = data.data.bannerImg
				this.categoryList = data.data.categoryList
				this.gallaryImgs = data.data.gallaryImgs
			})

		}

	}
</script>
	
