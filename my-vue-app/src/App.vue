<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import home from './pages/home.vue';
import login from './pages/login.vue'
import {computed} from 'vue'
import {useUserStore} from './store/user.ts'
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.isLogin)
</script>

<template>
  <login v-if="!isLogin"></login>
  <home v-else></home>
</template>

<style lang="scss">
  @import '@/assets/style/base.scss';
</style>
