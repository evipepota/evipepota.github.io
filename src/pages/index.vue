<script lang="ts">
export default {
    data() {
        return {
            title: 'evipepota',
            message: 'Welcome to Vue',
            pink: true,
        };
    },
};
</script>

<script setup lang="ts">
import Tab from "@/components/Tab.vue"
</script>


<template>
    <img src="@/assets/evip2.gif">
    <h1 :title="message" :class="{ pink: pink }">{{ title }}</h1>

    <br>

    <Tab />

</template>

<style>
img {
    max-width: 100%;
}

.pink {
    color: pink;
}
</style>