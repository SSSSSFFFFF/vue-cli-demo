// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'amfe-flexible/index.min.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'animate.css'
//touch插件
import VueTouch from 'vue-touch'
// console.log(VueTouch)
Vue.use(VueTouch, {name: 'v-touch'})

import global from './components/global'
import utils from './components/util'
import axios from 'axios'
//测试
//axios.defaults.baseURL = 'https://b.t3sting.com';
//正式
axios.defaults.baseURL = 'http://fmcc1808.dwechat.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.timeout = 10000;
Vue.prototype.utils = utils;
Vue.prototype.global = global;
Vue.prototype.axios = axios;
Vue.config.productionTip = false

// router.beforeEach((to,from,next)=>{
//   if(to.name == 'p9'){
//     console.log(3);
//     wechat.onReady(function(){
//       var openId = wechat.wechatInfo.Data.OpenId;
//       var nickName = wechat.wechatInfo.Data.Nickname;
//       axios({
//           method: 'post',
//           url:'/api/json/QueryByMultipleCriterion',
//           data:JSON.stringify({
//               Criterion:[
//                   {
//                       Key:"userOpenId",
//                       Value:openId,
//                       Method:'EQ'
//                   }
//               ],
//               DataSecrets:'',
//               CollectionName:'fmcc1807_signup'
//           })
//       }).then(function(data){
//           if(data.data.Result == 'Success' && data.data.Data.length > 0){
//             next();
//           }else{
//             next('/p8');
//           }
//       }).catch(function(error){
//           next('/p8');
//           console.log(error);
//       })
//     })
//   }else{
//     next();
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
