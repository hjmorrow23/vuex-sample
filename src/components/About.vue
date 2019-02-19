<template>
    <section>
        <h1>About Your Power</h1>
        <p>Your power is {{$store.getters.power.power}}.</p>
        <img class="power-img" :src="$store.getters.power.img" />
        <p>You are weak against {{$store.getters.power.weakness}}.</p>
        <img class="power-img" :src="$store.getters.power.weakImg" />
        <p>You are strong against {{$store.getters.power.strongAgainst}}.</p>
        <img class="power-img" :src="$store.getters.power.strongImg" />
        <router-link class="route-link" to="/">Get a new power</router-link>
    </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .route-link {
        display: block;
        margin-top: 40px;
    }
</style>