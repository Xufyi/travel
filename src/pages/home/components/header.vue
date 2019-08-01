<template>
	<div class="header">
		<div class="back">
			<span class="iconfont icon_left">&#xe622;</span>
		</div>
		<div class="search">
			<span class="iconfont icon_search">&#xe611;</span>
			<input type="text" placeholder="输入城市/经典/旅游主题">
		</div>
		<div class="city">
			<router-link :to="'city'">
				{{this.currentCity}}
				<span class="iconfont icon_arrow">&#xe631;</span>
			</router-link>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	// style文件加了别名,简化路径书写
	@import "~styles/varibles.scss";
	.header{
		color:#fff;
		height:$headerHeight;
		background: $bgColor;
		text-align: center;
		display: flex;
		align-items:center;
		.back{
			width: 0.64rem;
			.icon_left{
			}
		}
		.search{
			flex:1;
			height: 100%;
			padding:0.12rem;
			box-sizing:border-box;
			position: relative;
			overflow: hidden;
			.icon_search{
				position: absolute;
				color: #ccc;
				top: 9px;
    			left: 8px;
			}
			input{
				width: 100%;
				height: 100%;
				box-sizing:border-box;
				padding-left:.4rem;
				border-radius: 0.1rem;
			}
		}
		.city{
			min-width: .56rem;	
			position: relative;
			text-align: left;
			a{	
				color: #FFF;
				.icon_arrow{
					font-size: .08rem;
					position: relative;
					top: -2px;
	    			right: 5px;
				}
			}
		}
	}
</style>
<script>
	import {mapState,mapGetters} from "vuex"
	export default{
		computed:{
			...mapState({
				currentCity:'city'
			}),
		}
	}
</script>