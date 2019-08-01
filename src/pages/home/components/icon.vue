<template>
	<div class="icon">
		<template>
			<swiper>
			    <swiper-slide v-for="(page,index) in pages" :key="index">
			    	<ul class="iconList">
						<li v-for="item in page" :key="item.id" >
							<img :src="item.imgUrl" alt="">
							<p>{{item.desc}}</p>
						</li>
					</ul>
			    </swiper-slide>
			</swiper>
		</template>
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/ellipsis.scss";
	.icon{
		width: 100%;
		.iconList{
			width: 100%;
			padding-bottom: 50%;
			box-sizing:border-box;
			li{
				width: 25%;
				height: 0;
				padding-bottom: 28%;
				text-align: center;
				float: left;
				position: relative;
				text-align: center;
				margin-bottom: .1rem;
				img{
					position: absolute;
					top:.2rem;
					left: .3rem;	
					width: 1.25rem;
				}
				p{
					@include ellipsis();
					width: 100%;
					position: absolute;
					bottom:.05rem;
				}
			}
		}
	}
	
</style>

<script>
	export default{
		props:['list'],

		//??
		// props: {
		//     list: {
		//       type: Array,
		//       default: function () {
		//         return []
		//       }
		//     },
		//   },

		computed:{
			// 把icon_arr转长度为8的二维数组
			pages(){
				var _iconArr = [];
				// 先this.list一开始为空字符，判断为数组时再执行
				if(this.list){
					this.list.forEach((item,index)=>{
						var r = parseInt(index / 8)
						// 判断数组是否有这一项,没有变为数组再增加
						if( !_iconArr[r] ){
							_iconArr[r] = []
						}
						_iconArr[r].push(item) 
					})
				}
				return _iconArr
			}
		}
	}
</script>