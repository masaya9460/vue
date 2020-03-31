  
<template>
	<div :class="open ? 'faq open' : 'faq'" @click="$emit('active', index)">
		<div class="accordion">{{ faq.accordion }}</div>
		<div class="panel">{{ faq.panel }}</div>
	</div>
</template>

<script>
export default {
	name: 'FAQ',
	props: ['faq', 'index', 'open']
}

</script>

<style scoped>
.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
}
.faq .accordion {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}
.faq.open .accordion {
  margin-bottom: 15px;
}
.faq .panel {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .panel {
  opacity: 1;
  max-height: 1000px;
}
</style>