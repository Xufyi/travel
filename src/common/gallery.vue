<template>
	<div>	
		<div class="wrapper" @click="handelGalleryClick">
			<swiper class="gallery" :options="swiperOption"  >
			    <swiper-slide class="gallery-item"  v-for="(item,index) in gallaryImgs" :key="index">
				    <img :src="item" alt="">
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
 			 </swiper>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.wrapper{
		position: absolute;
		z-index: 9999;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		background: #000;
		display: flex;
		align-items: center;
		overflow: hidden;
		.gallery{
			width: 100%;
			overflow: visible;
			img{
				width: 100%;
				// 去掉下面3px的距离
				display: block;
			}
			.swiper-pagination{
				color: #Fff;
				bottom: -.5rem;
			}
		}
	}
</style>

<script>
	export default {
	    data () {
	        return {
		        swiperOption: {
		        	pagination:{
		        		el:'.swiper-pagination',
		        		//显示分页器
		        		type:'fraction',
		        	},
		        	// 容器或父容器改变时,重新渲染
		        	observeParents:true,
		        	observer:true,

		        }
	        }
	    },
	    props:['gallaryImgs'],
	    methods:{
	    	handelGalleryClick(){
	    		this.$emit('close')
	    	}
	    }
	}
   
</script>