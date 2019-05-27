<template>
  <div class="appArea">
    <div class="headerArea col-12 p-0 ">
      <headerComp />
    </div>
    <div class="contentArea col-12">
      <nuxt />
    </div>
    <div class="footerArea">
      <footerComp />
    </div>
  </div>
</template>
<script>
import headerComp from '~/components/header/headerComp.vue'
import footerComp from '~/components/footer/footerComp.vue'
export default {
  components:{
    headerComp,
    footerComp
  }  
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.appArea{
  min-height: 100vh;
  padding-bottom: 120px;/*←footerの高さ*/
  box-sizing: border-box;/*←全て含めてmin-height:100vhに*/
  position: relative;/*←相対位置*/
  background-color: rgb(245,245,245);
}

</style>
