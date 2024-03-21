<script setup lang="ts">
import { computed } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const props = defineProps<{
  routes: RouteRecordRaw[]
}>()

const sortedRoutes = computed(() => {
  return [...props.routes].sort((a, b) => {
    const postedAtA = a.meta?.postedAt
      ? new Date(a.meta.postedAt as string).getTime()
      : 0
    const postedAtB = b.meta?.postedAt
      ? new Date(b.meta.postedAt as string).getTime()
      : 0
    return postedAtB - postedAtA
  })
})
</script>

<script lang="ts">
export default {
  methods: {
    removePathPrefix(path: string) {
      return path.replace(/^\/ctf\//i, '')
    },
  },
}
</script>

<template>
  <ul class="custom-list">
    <li v-for="(r, i) in sortedRoutes" :key="i">
      <RouterLink :to="r.path" class="link">
        <div class="list-container">
          <div class="text-content">{{ r.meta?.title }}</div>
          <div>{{ r.meta?.postedAt }}</div>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style>
.link {
  text-decoration: none;
  color: pink;
}
.link:hover {
  color: white;
}
.custom-list {
  list-style-type: none;
}
.list-container {
  align-items: center;
  justify-content: space-between;
  background-color: #2e2e2e;
  padding: 1.5rem;
  border-radius: 20px;
  margin: 10px;
}
.text-content {
  font-size: 1.5rem;
  text-align: center;
}
</style>
