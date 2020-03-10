<template>
    <div>
        <h5>Study</h5>
        <button @click="Home">Homeに行く</button>
        <section class="study">
            <div class="study__list"><v-fa :icon="['fab', 'html5']" size="2x" class="fb"/><hr>HTML</div>    
            <div class="study__list"><v-fa :icon="['fab', 'css3-alt']" size="2x" class="fb"/><hr>CSS</div>
            <div class="study__list"><v-fa :icon="['fab', 'js-square']" size="2x" class="fb"/><hr>JAVASCRIPT</div>
            <div class="study__list"><v-fa :icon="['fab', 'vuejs']" size="2x" class="fb"/><hr>VUE</div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        Home() {
            this.$router.push({ path: "/"});
        }
    }
}
</script>

<style scoped>
@import "../styles/study.css";

</style>