<template>
<div id="app">

  <!-- <div class="container">
    <nav class="header">
      <router-link 
      to="/" 
      active-class="link-active" 
      exact
      class="header__li"
      >Home</router-link>
      <router-link 
      to="/study" 
      active-class="link-active"
      exact 
      class="header__li"
      >Study</router-link>
      <router-link 
      to="/contact" 
      active-class="link-active"
      exact 
      class="header__li"
      >Contact</router-link>
      <router-link 
      to="/accordion" 
      active-class="link-active"
      exact 
      class="header__li"
      >Accordion</router-link>
    </nav>
    <transition 
      name="fade" 
      mode="out-in"
      appear
    >
    <router-view></router-view>
    </transition>

      <div id="app">
    <Tes></Tes>

        <div class="faqs">
          <FAQ 
            v-for="(faq, i) in faqs" 
            :faq="faq" 
            :index="i" 
            :key="i"
            :open="faq.open"
            @active="active"
          />
        </div>
      </div> -->
      <h1>ToDo List</h1>
      <form>
        <input type="text">
        <button v-on:click="addItem">
          追加
        </button>
      </form>
  </div> 
</template>

<script>
export default{
  name: "#app",
  methods: {
    addItem: function(event) {
      alert(Text);
    }
  }
}
// var app = new Vue({
//   el: '#app',
//   methods: {
//     addItem: function(event) {

//     }
//   }
// }) 
</script>

<style lang="scss">
@import  "./styles/venders/rebootstrap.min.css";
/* @import  "./styles/base.css"; */

</style>
