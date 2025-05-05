<template>
  <ProductsSection
    v-if="products.length"
    title="products"
    :products="filteredProducts"
  />
</template>

<script setup>
const productsStore = useProductsStore();

const { pending } = await useAsyncData(
  "products",
  () => productsStore.getProducts() // Now properly returns a promise
);

const { products, search } = storeToRefs(productsStore);

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.title.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style></style>
