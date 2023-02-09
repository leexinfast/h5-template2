<template>
    <div class="card">
        <h1>{{ msg }}</h1>
        <button type="button" @click="increment">count is {{ count }}</button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    defineProps<{
        msg: string
    }>()

    const count = ref(1)

    const increment = () => {
        count.value++
    }
</script>

<style scoped>

</style>
