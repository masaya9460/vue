<template>
  <div class="container">
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
    </nav>
    <transition 
      name="fade" 
      mode="out-in"
      appear
    >
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>

</script>

<style>
@import  "./styles/venders/rebootstrap.min.css";
@import  "./styles/base.css";

</style>
