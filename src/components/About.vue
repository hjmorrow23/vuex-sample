<template>
    <section>
        <h1>About Your Power</h1>
        <p>Your power is {{$store.getters.power.power}}.</p>
        <p>You are weak against {{$store.getters.power.weakness}}.</p>
        <p>You are strong against {{$store.getters.power.strongAgainst}}.</p>
        <router-link class="route-link" to="/">Get a new power</router-link>
    </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>