<template>
  <div id="app">
    <pageheader></pageheader>
    <router-view></router-view>
    <div id="contractCenter"></div>
  </div>
</template>

<script>
import Header from './components/Header'
import Page from './components/Page'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
export default {
  name: 'App',
  components:{
    "pageheader":Header,
    "page":Page,
    "page1":Page1,
    "page2":Page2,
    "page3":Page3
  }
}
</script>

<style>

</style>
