<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    class="card border-0 text-decoration-none"
  >
    <div
      class="d-flex p-1 align-items-center justify-content-center w-100"
      style="height: 180px"
    >
      <img
        :src="product.image"
        class="card-img-top mh-100 w-auto mw-100"
        alt="..."
      />
    </div>
    <div class="card-body">
      <h5 class="card-title overflow-hidden text-nowrap fw-light">
        {{ product.title }}
      </h5>
      <p class="card-text fw-semibold">AED {{ product.price * 4 }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps(["product"]);
</script>

<style></style>
