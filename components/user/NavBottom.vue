<template>
  <div
    class="absolute w-full bottom-0 h-[45px] z-10 flex items-center justify-around md:hidden"
  >
    <NuxtLink to="/">
      <div class="flex items-center">
        <span class="iconfont">&#xe8a7;</span>
        <span class="color-text">首页</span>
      </div>
    </NuxtLink>

    <NuxtLink to="/heart-word">
      <div class="flex items-center">
        <span class="iconfont">&#xe8a6;</span>
        <span class="color-text">心语</span>
      </div>
    </NuxtLink>
    <NuxtLink to="/friend-link">
      <div class="flex items-center">
        <span class="iconfont">&#xe8a5;</span>
        <span class="color-text">友情链接</span>
      </div>
    </NuxtLink>

    <NuxtLink to="/knowledge">
      <div class="flex items-center">
        <span class="iconfont">&#xe8a4;</span>
        <span class="color-text">知识库</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.iconfont {
  font-family: "iconfont";
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.color-text {
  @apply cursor-pointer text-lg whitespace-nowrap;
  text-align: center;
  background: linear-gradient(
    to right,
    rgb(67, 102, 218),
    rgb(91, 112, 208),
    rgb(255, 153, 0)
  );
  color: transparent;
  background-clip: text;
}

* {
  font-family: "myFont";
}
</style>
