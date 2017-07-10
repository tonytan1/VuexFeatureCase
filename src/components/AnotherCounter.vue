<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // increment() {
        //     // this.$emit('updated', 1);
        //     this.$store.state.counter++;
        // },
        // decrement() {
        //     this.$store.state.counter--;
        // }
        // increment() {
        //     // this.$emit('updated', 1);
        //     // this.$store.state.counter++;
        //     this.$store.commit('increment');
        // },
        // decrement() {
        //     this.$store.commit('decrement');
        // }
        // ...mapActions([
        //     'increment',
        //     'decrement' 
        // ]),
        increment(by) {
            this.$store.dispatch('increment', by);
        },

        decrement(by) {
            this.$store.dispatch('decrement', by);
        }
    }
}
</script>