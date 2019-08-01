<template>
	<div class="recommend">
		<h3 class="recommend_title">热门推荐</h3>
		<ul class="itemList">
			<router-link  
				tag="li"
				v-for="item in list" 
				class="border-bottom"
				:key="item.id" 
				:to="'/detail/'+ item.id"
			 >
				<img :src="item.imgUrl" alt="">
				<div class="itemRight">
					<p class="title">{{item.title}}</p>
					<p class="desc">{{item.desc}}</p>
					<span class="price">￥{{item.price}}起</span>
					<button class="btn">查看详情</button>
				</div>
			</router-link >
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/ellipsis.scss";
	.recommend{
		.recommend_title{
			padding-left: 0.1rem;
			background: #eee;
			line-height: 0.6rem;
		}
		.itemList{
			overflow: hidden;
			li{
				overflow: hidden;
				padding: .1rem;
				padding-bottom: 30%;
				height: 0;
				img{
					width: 30%;
					overflow: hidden;				
				}
				.itemRight{
					float: right;
					width: 69%;
					line-height: .6rem;
					position: relative;
					
					.title{
						font-weight: bold;
						@include ellipsis();
						min-width: 0;
					}
					.desc{
						@include ellipsis();
						color:'#ff9300';
						min-width: 0;
						height: 100%；

					}
					.price{
						color: #ff7400;
						font-weight: bolder;
						font-size: .4rem;
						line-height: 1.4rem
					}
					.btn{
						position: absolute;
						bottom:.5rem;
						right:.15rem;
						color: #fff;
						background: #ff7400;
						padding: .05rem; 
					}
				}
			}
		}
	}
	
</style>

<script>
	export default{
		props:["list"],  
	}
</script>