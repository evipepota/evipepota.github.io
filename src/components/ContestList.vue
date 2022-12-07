<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router';

defineProps<{
    routes: RouteRecordRaw[],
}>();
</script>

<template>
    <ul>
        <li v-for="(r, i) in routes" :key="i">
            <RouterLink :to="r.path">
                <div>
                    <i></i>
                    <span>Post:&nbsp;</span>
                    <time :datetime="String(r.meta?.postedAt)">{{ r.meta?.postedAt }}</time>
                </div>
                <div>{{ r.meta?.title }}</div>
                <p>{{ r.meta?.description }}</p>
                <div>
                    <span>詳しく見る</span>
                </div>
            </RouterLink>
        </li>
    </ul>
</template>