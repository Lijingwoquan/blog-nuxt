<template>
  <el-menu
    :collapse="isCollapse"
    :default-active="defaultActive"
    :unique-opened="true"
  >
    <NuxtLink to="/admin">
      <el-menu-item index="/admin">
        <el-icon><PieChart /></el-icon>
        <template #title>
          <span>数据展示</span>
        </template>
      </el-menu-item>
    </NuxtLink>

    <el-sub-menu index="2">
      <template #title>
        <el-icon><Notebook /></el-icon>
        <span>文章</span>
      </template>
      <NuxtLink to="/admin/essay/create">
        <el-menu-item index="/admin/essay/create"> 创建文章 </el-menu-item>
      </NuxtLink>
      <NuxtLink to="/admin/essay/manage">
        <el-menu-item index="/admin/essay/manage"> 管理文章 </el-menu-item>
      </NuxtLink>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>
        <el-icon><Files /></el-icon>
        <span>分类标签</span>
      </template>

      <NuxtLink to="/admin/kind">
        <el-menu-item index="/admin/kind"> 管理分类 </el-menu-item>
      </NuxtLink>
      <NuxtLink to="/admin/label">
        <el-menu-item index="/admin/label"> 管理标签 </el-menu-item>
      </NuxtLink>
    </el-sub-menu>

    <!-- 心语 -->
    <NuxtLink to="/admin/heartWords">
      <el-menu-item index="/admin/heartWords">
        <template #title>
          <el-icon><IceTea /></el-icon>
          <span>心语</span>
        </template>
      </el-menu-item>
    </NuxtLink>

    <!-- 友链 -->
    <NuxtLink to="/admin/">
      <el-menu-item index="/admin/friendLink">
        <el-icon><ToiletPaper /></el-icon>
        <template #title>
          <span>友链</span>
        </template>
      </el-menu-item>
    </NuxtLink>

    <!-- 我的 -->
    <NuxtLink to="/admin">
      <el-menu-item index="/admin/me">
        <el-icon><Collection /></el-icon>
        <template #title>
          <span>我的</span>
        </template>
      </el-menu-item>
    </NuxtLink>

    <!-- 图库 -->
    <NuxtLink to="/admin/gallery">
      <el-menu-item index="/admin/gallery">
        <el-icon><DocumentCopy /></el-icon>
        <template #title>
          <span>图库</span>
        </template>
      </el-menu-item>
    </NuxtLink>
  </el-menu>
</template>

<script setup>
const route = useRoute();

const isCollapse = ref(false);

const defaultActive = ref("/admin");

watch(
  () => route.path,
  () => {
    defaultActive.value = route.path;
  },
  {
    immediate: true,
  }
);
</script>
