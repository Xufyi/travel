<template>
	<div class="search">
		<div class="search_inp">
			<input type="text" placeholder="请输入城市名或拼音" v-model="keyword">
		</div>
		<!-- 当输入框有内容时才显示搜索列表 -->
		<div class="search_list" ref="search" v-show="keyword">
			<ul >
				<li class="border-bottom" 
					v-for="(item,key) of list"
					@click="handelCityClick(item.name)"
				>
					{{item.name}}
				</li>
			</ul>
			<div class="noData" v-show="isNoData">查找不到匹配值</div>
		</div>
		
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/varibles.scss";
	.search{
		.search_inp{
			height: .6rem;
			background: $bgColor;
			color: #eee;
			display: flex;
			text-align: center;
			line-height: .86rem;
			padding:.1rem;
			input{
				width: 100%;
				padding: 0 .1rem;
				border-radius: .1rem;
				color:#666;
				text-align: center;
			}
		}
		.search_list{
			position: absolute;
			top:1.66rem;
			bottom:0;
			left:0;
			right:0;
			z-index: 999;
			background: #ccc;
			overflow: hidden;
			ul{
				li{
					background: #fff;
					line-height: .7rem;
					padding-left: .1rem;
				}
			}
			.noData{
				background: #fff;
				line-height: .7rem;
				padding-left: .1rem;
			}
		}
	}
</style>

<script>
	import BScroll from 'better-scroll';
	import {mapState,mapMutations} from 'vuex';

	export default{
		data(){
			return {
				//??
				keyword:'',
				// keyword:' ',
				list:[],
				timer : null
			}
		},
		props:['cities'],
		computed:{
			isNoData(){
				return !this.list.length
			}
		},
		watch:{
			//监听搜索框
			keyword(){
				//设置100ms的延时器执行,提高性能
				if(this.timer){
					clearTimeout(this.timer)
				}
				//没有输入内容时不执行
				if( !this.keyword ){
					this.list= []
					return 
				}
				
				this.timer = setTimeout(()=>{
					for(var key in this.cities){
						var result =  this.cities[key].forEach((item,index)=>{
						// 名称或是拼音含有关键字
						// ??
						// console.log(item.spell,this.keyword,item.spell.indexOf(this.keyword))
						// console.log('a' === this.keyword)
						// var str = '4aa'
						// console.log(str.indexOf('a'))

						if(item.spell.indexOf(this.keyword) >= 0 || item.name.indexOf(this.keyword) >= 0) {
							this.list.push(item)
							}
						})
					}
					return 
				},100)	
			}
		},
		methods:{
			handelCityClick(city){
				this.change(city)
				this.$router.push('./')
			},
			...mapMutations(['change'])
		},
		mounted(){
			var search = this.$refs.search
			//实例化
			this.scroll = new BScroll(search,{
				click:true
			})
		},
	}
</script>