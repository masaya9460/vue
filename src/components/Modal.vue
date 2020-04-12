<template>
  <div class="app">

    <button @click="openModal">Click</button>

    <open-modal v-show="showContent" @from-child="closeModal">slotからモーダルウィンドウへ</open-modal>

  </div>
</template>


<script>
Vue.component('open-modal',{
  template : `
    <div class="overlay" @click="clickEvent">
        <div class="content">
          <p><slot></slot></p>
          <button @click="clickEvent">close</button>
        </div>
    </div>
    `,
  methods: {
    clickEvent() {
      this.$emit('from-child')
    }
  }
})

export default({
  name: 'Modal',
  data() {
    return {
      showContent: false
    }
  },
  methods: {
    openModal() {
      this.showContent = true
    },
    closeModal() {
      this.showContent = false
    }
  }
})
</script>

<style>
.overlay {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  z-index: 200;
  width: 50%;
  padding: 1em;
  background-color: antiquewhite;
}
</style>