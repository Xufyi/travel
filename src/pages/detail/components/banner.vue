<template>
	<div>
		<div class="banner" @click="handelBannerClick">
			<div class="banner-img">
				<img :src="bannerImg" alt="">
			</div>
			<div class="banner-info">
				<div class="title">{{sightName}}</div>
				<div class="number">
					<span class="iconfont icon_search">&#xe674;</span>
					<span>{{this.gallaryImgs.length}}</span>
				</div>
			</div>
		</div>
		<CommonGallary  
			v-show="isShowGallary"
			@close="handelGallaryClick"
			:gallaryImgs="gallaryImgs"
			>
		</CommonGallary>
	</div>
</template>

<style lang="scss" scoped>
	.banner{
		position: relative;
		.banner-img{
			width: 100%;
			overflow: hidden;
			height: 0;
			padding-bottom: 55%;
			img{
				width: 100%;
			}
		}
		.banner-info{
			position: absolute;
			left:0;
			bottom:0px;
			right:0;
			padding: 0 .3rem;
			color: #fff;
			justify-content:space-around;
			background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
			.title{
				font-size: .32rem;
				float: left;
			}
			.number{
				float: right;
				font-size: .24rem;
				background: rgba(0,0,0,0.5);
				border-radius: .24rem 0 0 .24rem;
				width: 2rem;
				text-align: center;
			}
		}
	}
</style>

<script>
	import CommonGallary from "common/gallery.vue";
	export default{
		components:{
			CommonGallary
		},
		props:['sightName','bannerImg','gallaryImgs'],
		data(){
			return {
				isShowGallary:false
			}
		},
		methods:{
			handelBannerClick(){
				this.isShowGallary = true
			},
			handelGallaryClick(){
				this.isShowGallary = false
			}
		}
	}
</script>