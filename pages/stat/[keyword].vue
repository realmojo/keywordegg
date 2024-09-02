<template>
  <div>
      z키워드 ㅋ
      {{keyword}}
    </div>
</template>

<script setup>


const route = useRoute();
const keyword = computed(() => {
  return route.params.keyword;
});

onMounted(() => {
  console.log(keyword);
});
</script>
