<script lang="ts">
import routes from '~pages'

const blogRoutes: RouteRecordRaw[] = routes.filter((route) =>
  route.path.startsWith('/blog/'),
)
</script>

<script setup lang="ts">
import ContentList from '@/components/ContentList.vue'
import { RouteRecordRaw } from 'vue-router'
</script>

<template>
  <div class="all-content">
    <ContentList :routes="blogRoutes" />
  </div>
</template>

<style>
.all-content {
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 678px) {
  .all-content {
    width: 100%;
  }
}
</style>
