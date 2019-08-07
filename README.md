项目预览：
https://xufyi.github.io/travel/dist/#/
请按F12,用移动端视口浏览


![image](https://github.com/Xufyi/travel/blob/master/travel.gif)


项目介绍:   
  项目分为，home,city,list 3个主要部分。  
1.用vue-cli搭建并打包。   
2.进入home主页面，默认城市"深圳"，可点击进入city页面。  
3.city页面可通过选择城市修改，修改成功后会跳转到主页。   
>>① 可以通过搜索关键字来选择城市，选择城市后会跳转回到首页  
    ② 为了避免刷新页面后，上次选择的数据丢失，利用了本地存储。  
  
4.主页面轮播图下的icon部分，使用了分页，可以左右拉动。    
5.热门推荐部分，点击进入detail详情页，并且会发送携带当前产品的id的请求.由于没有足够多的后端数据，所以用了同一进数据渲染。    
6.详情页，点击图片，会进入显示图片的画廊，画廊可以左右移动，下方显示当前图片的页码，点击页面中的黑色部分可以会到详情页。    
7.详情页下方的“儿童票”部分使用了递归组件渲染  
      
      
使用的工具和插件：  
1.引入reset（重置样式），border样式文件（解决移动端1px边框会被当成2像素边框的问题）  
2.轮播图使用了vue-awesome-swiper 4.0版本。  
3.city页面的滚动使用了better-scroll  
4.使用keep-alive优化，减少页面数据请求次数  
5.icon使用了阿里的字体图标  
  
  
项目中的注意点：  
1.vue移动端绑定click事件失效  
better-scroll 默认会阻止浏览器的原生 click 事件，需要配置click：true  
this.scroll = new Bscroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })  
  
2.移动端300ms点击延迟  
禁用游览器缩放  
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">  
使用FastClick（FastClick是一个简单易用的库，用于消除物理点击和click在移动浏览器上触发事件之间300毫秒的延迟）  
import FastClick from 'fastclick'  
FastClick.attach(document.body)  
  
3.使用vue-awesome-swiper插件时，轮播组件直接显示最后一页  
页面加载时，还没接收到ajax传递过来的数据，轮播组件接收到的是初始化的空数组，当获取到数据父组件传给轮播组件的时候，重新渲染数据才回去到轮播图片，通过v-if判断数组为空的时候轮播组件不被创建，当有数据过来的时候才被创建  
<swiper :options="swiperOption" v-if="showSwiper">  
showSwiper() {   return this.list.length   }  
    
4.轮播图手动操作后轮播图不播放  
>>options中loop失效  
设置disableOnInteraction:false    
    
5.keep-alive优化，减少页面数据请求次数   
keep-alive是Vue提供的一个抽象组件，用来对组件进行缓存  
当组件在keep-alive内被切换时组件的activated、deactivated这两个生命周期钩子函数会被执行，mounted只被加载一次  
  
6.对全局事件的解绑  
项目中在详情页监听scroll事件触发handleScroll方法，在首页依旧能触发，解决方法是在退出详情页的时候对事件进行解绑（利用keep-alive提供的两个生命钩子函数）  
activated(){  
>>window.addEventListener('scroll',this.handleScroll)  
},  
deactivated(){  
>>window.removeEventListener('scroll',this.handleScroll)  
},  
  
7.滚动行为    
当切换页面的时候，第二个页面会停留在第一个页面滚动的位置，解决方法：在router文件夹下的index.js配置  
scrollBehavior (to, from, savedPosition) {  
>> return { x: 0, y: 0 }  
}  



