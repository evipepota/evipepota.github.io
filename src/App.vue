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
import Tab from "./components/Tab.vue"
import Header from "./components/Header.vue"
</script>


<template>
    <Header />
    <img src="./assets/evip2.gif">
    <h1 :title="message" :class="{ pink: pink }">{{ title }}</h1>

    <br>

    <Tab />

</template>

<style>
.pink {
    color: pink;
}
</style>