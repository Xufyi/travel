<template>
	<div class="recommend">
		<h3 class="recommend_title">周末去哪儿</h3>
		<ul class="itemList">
			<li  v-for="item in list" :key="item.id" class="border-bottom">
				<img :src="item.imgUrl" alt="">
				<div class="itemInfo">
					<p class="title">{{item.title}}</p>
					<p class="desc">{{item.desc}}</p>
				</div>
			</li>
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
			li{
				padding-bottom: .1rem;
				img{
					width:100%;	
				}
				.itemInfo{
					padding-top: .1rem;
					box-sizing:border-box;
					position: relative;
					line-height: .4rem;
					overflow: hidden;
					text-align: center;
					.title{
						font-weight: bold;
						@include ellipsis();
						min-width: 0;
					}
					.desc{
						@include ellipsis();
						color:'#ff9300';
						min-width: 0;
					}
				}
			}
		}
	}
	
</style>


<script>
	export default{
		props:['list']
	}
</script>