<template>
	<div>
	<!-- swiper加v-if 有数据时在渲染，避免options中loop失效 -->
		<swiper class="swiper" :options="swiperOption" v-if="list.length>1" >
		    <swiper-slide class="swiper_item" v-for="(item,index) of list" :key="list.id" >
			    <img :src="item.imgUrl" alt="">
		    </swiper-slide>
		    <!-- 小圆点 -->
		    <div class="swiper-pagination"  slot="pagination"></div>
 		 </swiper>
	</div>

</template>
<style lang="scss" scoped>
	.swiper  /deep/ .swiper-pagination-bullet-active {
		background: #fff !important;
	}
	.swiper{
		.swiper_item{
			height: 0;
			overflow: hidden;
			padding-bottom: 31.25%;
			background: #ccc;
			img{
				width: 100%;
			}
		}		
	}
</style>
<script>
  export default {
    data () {
      return {
	        swiperOption: {
	        	// 设置小圆点
	        	pagination:{
	        		el:".swiper-pagination",
	        	},
	        	// 左右拉动循环图片
	        	loop:true,
	        	// 自动轮播
	        	autoplay:{
	        		delay:500,
	        		// 防止手动操作后轮播图不播放
	        		disableOnInteraction:false,
	        	}
	        }
        }
    },
    props:["list"], 
  }

 
</script>