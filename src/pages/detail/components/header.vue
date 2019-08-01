<template>
	<div class="header">
		<router-link 
			tag ="div" 
			class="header-back" 
			to="/"  
			v-if="isShow"
			>
			<span class="iconfont icon_left">&#xe622;</span>
		</router-link>

		<div class="header-fixed" v-show="!isShow" :style="opacity">
			景点详情
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/varibles.scss";

	.header{
		.header-back{
			position: absolute;
			top:.1rem;
			left:.1rem;
			width: .8rem;
			height: .8rem;
			background: #000;
			color: #fff;
			border-radius: .4rem;
			line-height: .8rem;
			text-align: center;
		}
		.header-fixed{
			color:#fff;
			height:$headerHeight;
			background: $bgColor;
			text-align: center;
			line-height: $headerHeight;
			font-size: .32rem;
			position: fixed;
			top:0;
			left:0;
			width:100%;
			z-index: 2;
		}
	}
</style>

<script>
	export default {
		data(){
			return {
				isShow : true,
				opacity:{
					opacity:0
				}
			}
		},
	    methods:{
			handelScroll(){
				console.log(document.documentElement.scrollTop)
				let top = document.documentElement.scrollTop


				if(top > 60){
				// if(top > 60 ){
					//回退按钮隐藏,景点详情出现
					this.isShow = false;
					let opacity = top / 140 >= 1? 1 : top / 140

					this.opacity = {opacity}
				}else{
					this.isShow = true
				}
			}
	    },
	    activated(){
	    	// 全局事件的绑定记得解绑,不然其他页面也会触发
	    	console.log('滚动事件')
	    	window.addEventListener('scroll',this.handelScroll)
	    },
	    deactivated(){
	    	window.removeEventListener('scroll',this.handelScroll)
	    }
	}
   
</script>