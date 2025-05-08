<template>
  <ProductsSection
    v-if="products.length"
    title="products"
    :products="filteredProducts"
  >
    <div
      class="search-container justify-content-center row row-cols-1 row-cols-md-2 pb-5 g-0"
    >
      <div class="position-relative col" style="height: fit-content">
        <input
          id="products-search"
          type="text"
          placeholder="search"
          class="search w-100"
          v-model="search"
        />
        <label class="search-icon" for="search">
          <img width="20px" src="/icons/Search Mouve.png" alt="" />
        </label>
      </div>
    </div>
  </ProductsSection>
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
