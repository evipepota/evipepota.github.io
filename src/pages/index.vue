<script lang="ts">
export default {
  data() {
    return {
      title: 'evipepota',
      message: 'Welcome to Vue',
    }
  },
}
</script>

<script setup lang="ts">
import Tab from '@/components/Tab.vue'
</script>

<template>
  <div class="top-page-container">
    <img src="@/assets/evip2.gif" />
    <h1 :title="message" class="title">{{ title }}</h1>

    <br />

    <Tab />
  </div>
</template>

<style>
.top-page-container {
  text-align: center;
}
img {
  max-width: 100%;
}

.title {
  font-size: 3.2em;
  line-height: 1.1;
  color: pink;
}
</style>
