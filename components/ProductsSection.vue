<template>
  <div class="py-5">
    <div class="container">
      <slot></slot>
      <h2 class="fw-bold text-uppercase text-color-1 mb-5">{{ title }}</h2>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4">
        <div v-for="(product, index) in products" :key="index" class="col">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "products"]);
</script>

<style></style>
