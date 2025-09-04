<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

const currentTime = ref('时间获取中……');
let timerId: number;
const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).replace(/\//g, '-');
};

onMounted(async () => {
  updateTime();
  timerId = setInterval(updateTime, 1000);
});
onUnmounted(() => {
  if (timerId) {
    clearInterval(timerId);
  }
});
</script>

<template>
  <div>
    <span>
      {{ currentTime }}
    </span>
  </div>
</template>

