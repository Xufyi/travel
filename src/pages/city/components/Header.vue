<template>
	<div class="header">
		<div class="back">
			<router-link :to="'/'">
				<span class="iconfont icon_left">&#xe622;</span>
			</router-link>
		</div>
		<h3 class="choose">城市选择</h3>
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/varibles.scss";
	
	.header{
		height: $headerHeight;
		background: $bgColor;
		color: #FFF;
		display: flex;
		text-align: center;
		line-height: .86rem;
		.back{
			width: 0.64rem;
			a{
				color:#fff;
			}
		}
		.choose{
			flex:1;
			font-size: .3rem; 
		}
	}
</style>

<script>
	export default{
		
	}
</script>