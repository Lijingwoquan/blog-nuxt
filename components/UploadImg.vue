<template>
  <el-upload
    ref="upload"
    name="img"
    :action="apiBase + '/admin/uploadImg'"
    :limit="1"
    :show-file-list="false"
    :on-exceed="handleExceed"
    :auto-upload="false"
    :on-change="handelChange"
    list-type="picture-card"
    :headers="{
      Authorization: token,
    }"
    class="overflow-hidden"
  >
    <el-image
      v-if="preview_url.length > 0 || imgUrl"
      :src="preview_url ? preview_url : imgPre + imgUrl"
      lazy
      loading="lazy"
    ></el-image>
    <el-icon v-else>
      <Plus />
    </el-icon>
  </el-upload>
</template>

<script setup>
const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
const imgPre = config.public.imgBase + "/";
const upload = ref(null);

const imgUrl = defineModel("imgUrl", {
  type: String,
  require: true,
});

const token = `Bearer ${getAdminAccessToken()}`;

const handleExceed = (files) => {
  upload.value.clearFiles();
  const file = files[0];
  upload.value.handleStart(file);
};

const preview_url = ref("");

const handelChange = (uploadFile, uploadFiles) => {
  const sanitizedFileName = uploadFile.name.replace(/\s+/g, "_");
  imgUrl.value = sanitizedFileName;
  preview_url.value = uploadFile.url;
};

const submitUpload = () => {
  upload.value.submit();
  toast("上传成功");
};

defineExpose({
  submitUpload,
});
</script>

<style scoped>
:deep(.el-upload--picture-card) {
  --el-upload-picture-card-size: 250px;
  @apply dark:bg-black;
}
</style>
