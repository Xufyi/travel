<template>
	<div>
		<div 
			class="list" 
			v-for='(item,index) of list'>
			<div class="item border-bottom">
				<div class="item-title">{{item.title}}</div>
				<div v-if="item.children" class="item-children">
					<detail-list :list="item.children"></detail-list>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.list{
		.item{
			line-height: 1rem;
			font-size: .32rem;
			padding-left: .1rem;
			.item-children{
				padding-left: .2rem;
			}
		}
		.scroll{
			height: 10rem;
		}
	}
</style>

<script>
	export default{
		// 组件种的name其实就是为了在递归组件中使用
		name:"DetailList",
		props:['list']
	}
</script>
	
