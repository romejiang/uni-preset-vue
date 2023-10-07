<template>
  <view class="flex flex-col justify-center items-center">
    <image class="m-10 w-30 h-30 rounded-full" src="/static/logo.png" />
    <view class="text-center">
      <text class="text-2xl">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style></style>
