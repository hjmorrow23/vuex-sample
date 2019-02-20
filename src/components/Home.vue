<template>
    <section>
        <h1 v-if="$store.getters.power.power">The power is yours!</h1>
        <p v-if="$store.getters.power.power">Your power is:</p>
        <p v-if="$store.getters.power.power">{{$store.getters.power.power}}</p>
        <img v-if="$store.getters.power.power" class="power-img" :src="$store.getters.power.img" />
        <button v-if="$store.getters.power.power" @click="generatePower">Generate New Power</button>
        <button v-if="!$store.getters.power.power" @click="generatePower">Generate Power</button>
        <router-link v-if="$store.getters.power.power" to="/about">How to use in battle</router-link>
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
        padding: 7px 15px;
        border: none;
        font-size: 16px;
        cursor: pointer;
        border: 1px solid black;
        background-color: transparent;
        color: black;
        border-radius: 5px;
        transition: color .35s, background-color .35s;
    }

    button:hover {
        color: white;
        background-color: black;
    }

    button:active,
    button:focus {
        outline: none;
    }
</style>