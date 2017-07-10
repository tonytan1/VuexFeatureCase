<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
    // props: ['counter']
    computed: {
        counter() {
            // console.log(this.$store.state.counter.counter);
            return this.$store.state.counter.counter;
        }
    }
}
</script>