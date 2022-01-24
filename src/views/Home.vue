<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Profile</li>
        <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Settings</li>
        <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Messages</li>
        <li class="py-2 px-4 w-full rounded-b-lg">Download</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
