<script setup lang="ts">
import Header from "@/components/Header.vue"
</script>

<template>
    <Header />
    <router-view class="router-view"></router-view>
</template>

<style>
.router-view {
    margin-top: 20px;
}
</style>