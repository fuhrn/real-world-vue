<template>
    <div>
        <h1>Create an Event, {{ user.name }}</h1>
        <p>This event was created by {{ user.name }}</p>
        <p>There are {{ catLength }} categories</p>
        <p>{{ getEventById(2) }}</p>
<!--        <ul>-->
<!--            <li v-for="cat in categories" :key="cat">{{ cat }}</li>-->
<!--        </ul>-->
    </div>
</template>

<script>
    import {mapState, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(["getEventById"]), //accediendo via MapGetters

            //accediendo a los getters del state directamente
            // getEvent() {
            //   return this.$store.getters.getEventById
            // },
            
            catLength() {
                return this.$store.getters.catLength //accediendo directamente al state
            },
            ...mapState(['user', 'categories']) //accediendo al state via mapState
        }
    }
</script>

<style scoped>

</style>