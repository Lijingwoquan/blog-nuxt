export const lazyLoadEssayList = async (queryForm) => {
  const config = useRuntimeConfig();
  const essayList = ref([]);
  const totalPage = ref(1);

  let q = queryToUrl(queryForm);

  const { data: essay, pending } = await useLazyFetch(`/base/essay_list${q}`, {
    baseURL: config.public.apiBase,
  });

  watch(
    essay,
    (newEssay) => {
      if (newEssay?.data) {
        const res = newEssay.data;
        essayList.value = res.essay_list;
        totalPage.value = res.totalPage;
      }
    },
    { immediate: true }
  );

  return {
    essayList,
    pending,
    totalPage,
  };
};
