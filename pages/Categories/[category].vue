<template>
  <ProductsSection :title="category" :products="products" />
</template>

<script setup>
const { getCategoryProducts } = useProductsStore();
const route = useRoute();
const category = computed(() => route.params.category);
let products = await useAsyncData(category, () =>
  getCategoryProducts(category.value)
).data;
</script>

<style></style>
