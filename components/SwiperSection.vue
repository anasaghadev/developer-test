<template>
  <div class="special-offers py-5">
    <div class="container">
      <!-- <h2 class="fw-bold text-uppercase text-color-1">special offers</h2> -->
      <h2 class="fw-bold text-uppercase text-color-1">{{ title }}</h2>
      <!-- swiper start -->
      <!-- <ClientOnly> -->
      <div class="swiper-outer-container position-relative" v-if="products">
        <swiper-container
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :loop="true"
          ref="containerRef"
          slides-per-view="4"
          :breakpoints="{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            631: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            960: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }"
        >
          <swiper-slide v-for="(product, idx) in tenProducts" :key="idx">
            <ProductCard :product="product" />
          </swiper-slide>
        </swiper-container>
        <!-- Go back one slide -->
        <button class="swiper-prev" @click="swiper.prev()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M13 19L2 12l11-7v6h9v2h-9z" />
          </svg>
        </button>
        <!-- Go forward one slide -->
        <button class="swiper-next" @click="swiper.next()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M11 19v-6H2v-2h9V5l11 7z" />
          </svg>
        </button>
        <div class="swiper-pagination"></div>
      </div>
      <!-- </ClientOnly> -->
      <!-- swiper end -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});

const productsStore = useProductsStore();
const { pending } = await useAsyncData(
  "products",
  () => productsStore.getProducts() // Now properly returns a promise
);

const { products } = storeToRefs(productsStore);
const tenProducts = computed(() => products.value.slice(0, 10));

// swiper start
const containerRef = ref(null);
const swiper = useSwiper(containerRef);
// swiper end
</script>

<style lang="css">
/*
:pagination="{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }"
.swiper-pagination {
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
.swiper-pagination-bullet {
  background-color: black;
  width: 30px;
  height: 5px;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  height: 10px;
}

*/
.swiper-prev,
.swiper-next {
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50%));
  z-index: 2;
  background-color: white;
  outline: none;
  border: 1px solid black;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}
.swiper-prev {
  left: 0;
}
.swiper-next {
  right: 0;
}
.swiper-outer-container:hover .swiper-prev,
.swiper-outer-container:hover .swiper-next {
  opacity: 1;
  transform: translateY(calc(-50% - 10px));
}
</style>
