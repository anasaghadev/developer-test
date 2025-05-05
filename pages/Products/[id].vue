<template>
  <div class="product py-5">
    <div class="container">
      <div v-if="product?.title" class="row row-cols-1 row-cols-md-2">
        <div class="col image text-center">
          <img
            class="mw-100"
            style="max-height: 100vh"
            :src="product.image"
            alt=""
          />
        </div>
        <div class="col text pt-4">
          <h1 class="fs-2 fw-bold text-capitalize">{{ product.title }}</h1>
          <p>
            {{ product.description }}
          </p>
          <p class="card-text fw-semibold">AED {{ product.price * 4 }}</p>

          <button
            class="btn btn-dark rounded-0 bg-black d-flex align-items-center gap-2"
            @click="addItemToCart(product)"
          >
            add to cart
            <img style="filter: invert()" width="20px" src="/icons/Cart.png" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const id = useRoute().params.id;
const { getProduct, addItemToCart } = useProductsStore();
const product = await useAsyncData(id, () => getProduct(id)).data;
// onNuxtReady(() => {
//   setInterval(() => {
//     // console.log(product);
//     store.getProduct(id);
//   }, 1000);
// });
</script>

<style></style>
