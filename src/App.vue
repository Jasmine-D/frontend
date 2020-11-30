<template>
  <div id="app">
    <!-- 导航区域 -->
    <UserHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
export default {
  components: { UserHeader },
  name: 'App'
}
</script>
