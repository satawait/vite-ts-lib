<template>
    <div>
        <MyButton seafood="tuna"/>
        {{ num }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MyButton, sum } from 'vite-ts-lib'
const num = ref(sum(1, 2, 3, 4, 5))
</script>

<style scoped>

</style>