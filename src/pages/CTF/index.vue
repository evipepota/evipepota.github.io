<script lang="ts">
import routes from '~pages'

const ctfRoutes: RouteRecordRaw[] = routes.filter((route) =>
  route.path.startsWith('/ctf/'),
)
</script>

<script setup lang="ts">
import ContentList from '@/components/ContentList.vue'
import { RouteRecordRaw } from 'vue-router'
</script>

<template>
  <div class="all-content">
    <ContentList :routes="ctfRoutes" />
  </div>
</template>
<style>
.all-content {
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
</style>
