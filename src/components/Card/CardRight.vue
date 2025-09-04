<script setup>
import {webConfig} from "/src/web.config.ts";
import Hitokoto from "../Hitokoto.vue";
import CardCopyRight from "./CardCopyRight.vue";
</script>

<template>
  <div class="Card-Right">
    <div class="HomePageText">
      <h1 class="HomePageTitle">{{webConfig.SITE_TITLE}}</h1>
      <p class="HomePageDesc">{{webConfig.Desc}}</p>
      <Hitokoto/>
    </div>
    <div class="Card-Nav">
      <button class="btn-me !bg-[#89B66DCC]">Blog</button>
      <button class="btn-me !bg-[#9198A1CC]">Github</button>
      <button class="btn-me !bg-[#3B82F6CC]">Send A Mail</button>
    </div>
    <CardCopyRight/>
  </div>
</template>