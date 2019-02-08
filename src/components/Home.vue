<template>
    <section>
        <h1>Home</h1>
        <p>Your power is:</p>
        <p>{{$store.getters.power.power}}</p>
        <button @click="generatePower">Generate Power</button>
        <router-link to="/about">Learn about this power</router-link>
    </section>
</template>

<script>
    import powers from "../powers.js";

    export default {
        name: "Home",
        components: {
            
        },
        data() {
            return {
                power: this.$store.getters.power,
            }
        },
        methods: {
            generatePower: function() {
                let val = powers[Math.floor(Math.random() * powers.length)];
                this.$store.commit('changePower', val);
            }
        }
    }
</script>

<style scoped>
    button {
        display: block;
        margin: 0 auto 30px;
    }
</style>