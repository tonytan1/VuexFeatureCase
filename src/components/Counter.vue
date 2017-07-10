<template>
    <div>
        <button class="btn btn-primary" @click="asynIncrement({by:50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asynDecrement({by:50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        methods: {
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ])
            ...mapActions([
                'asynIncrement',
                'asynDecrement'
            ])
        }
    }
</script>