<template>
  <div id="global-container" :class="{'menu-open': active}">
    <div class="container">
      <div class="mobile-menu__cover"></div><!-- menuOpen時背景暗く -->
      <header class="header">
        <button class="mobile-menu-btn" @click="openMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </div>
    <nav class="mobile-menu">
      <ul class="mobile-menu__main">
        <li class="mobile-menu__item">
          <a class="mobile-menu__link" href="#">
            <span class="main-title">Our Service</span>
            <span class="sub-title">サービスについて</span>
          </a>
        </li>
        <li class="mobile-menu__item">
          <a class="mobile-menu__link" href="#">
            <span class="main-title">About Us</span>
            <span class="sub-title">私たちについて</span>
        </a>
        </li>
        <li class="mobile-menu__item">
          <a class="mobile-menu__link" href="#">
            <span class="main-title">Contact Us</span>
            <span class="sub-title">コンタクト方法</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
 export default {
  data() {
   return {
    active: false,
    cover: false,
   }
  },
  methods: {
   openMenu() {
    this.active = !this.active,
    this.cover = !this.cover
   }
  }
 }
</script>

<style lang="scss">
$cWhite: white;
$cBlack: black;

.container {
  position: relative;
  background-color: gray;
  height: 100vh;
  z-index: 100;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.mobile-menu-btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cBlack;
    width: 35px;
    height: 2px;
    display: block;
    margin-bottom: 9px;
    transition: transform 0.7s;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.mobile-menu{
  position: fixed;
  left: 0;
  top: 60px;

  &__cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
  }
  &__main {
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item{
    display: block;
    padding: 0 50px;
    list-style: none;
    transform: translate3d(0, 0, -1000px);
    transition: transform 0.3s, opacity 0.2s;
    opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}

.menu-open {
  & .container{
    transform: translate(300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
  & .mobile-menu{
    &__cover {
      opacity: 1;
      visibility: visible;
    }
    &__item {
      transform: none;
      opacity: 1;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.07s;
        }
      }
    }
  }
  .mobile-menu-btn {
    & > span {
      background-color: $cBlack;

      &:nth-child(1) {
        transition-delay: 70ms;
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transition-delay: 0s;
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms;
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}

.main-title {
  font-weight: 600;
  font-size: 25px;
}
.sub-title {
  display: block;
  font-size: 14px;
}
</style>