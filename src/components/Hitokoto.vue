<script setup lang="ts">
import { ref, onMounted } from 'vue';

const Hitokoto = ref('一言获取中……');

onMounted(async () => {
  try {
    const response = await fetch('https://v1.hitokoto.cn?c=a');
    const data = await response.json();
    Hitokoto.value = data.hitokoto;
  } catch (error) {
    console.error('获取一言失败:', error);
    Hitokoto.value = '一言获取失败，请稍后再试。';
  }
});
</script>

<template>
    <p class="Hitokoto text-[#4b5563] text-[1rem] mb-4 text-center md:text-left">{{ Hitokoto }}</p>
</template>
