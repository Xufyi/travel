<template>
  <div id="app">
  	<!--设置detail组件,每次激活都去发送数据请求,这里不能打开,因为滚动事件在激活钩子里面  -->
  	<!-- <keep-alive exclude="detail"> -->
  	<keep-alive>
  		<router-view/>
  	</keep-alive>
  </div>
</template>

<script>
import Home from "./pages/home/home.vue";


export default {
  name: 'App',
  components:{Home},

}
</script>

<style>

</style>
