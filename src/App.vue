<template>
   
  <div id="app">
    <div class='vipCard'>
      会员卡
    </div>
    <div >
      		<ul class="nav">
              <li><router-link  to="/" >股票池</router-link></li>
              <li><router-link  to="/p2">盘面播报</router-link></li>
              <li><router-link  to="">内参报告</router-link></li>
               <li><router-link  to="">视频节目</router-link></li>
         </ul>
    </div>
    <!-- <transition :name="global.transitionName"> -->
      <router-view />
  
    <!-- </transition> -->
  

  </div>
</template>

<script>
  function addClass(dom,cls){
    var dom_clsName = dom.className;
    if(dom_clsName.indexOf(cls) === -1){
      dom.className = dom_clsName== '' ? cls : dom_clsName + ' ' + cls;
    }
  }
  function removeClass(dom,cls){
    var dom_clsName = dom.className;
    dom.className = dom_clsName.replace(cls,'').replace(/(^\s*) | (\s*$)/g,'');
  }
export default {
  name: 'App',
  methods:{
    toPage1(){
      console.log("😁")
    }
  },
  mounted(){
  
  }
}
</script>

<style>



*{
  box-sizing: border-box;
}
/* iframe {
  display: none !important;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vipCard {
  height:200px;
  width:100%;
  background: #ccc;
  display:flex;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
  justify-content: center;
}

.nav li {
  padding: 10px;
  font-size: 15px;
}
</style>
