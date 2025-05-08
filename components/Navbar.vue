<template>
  <div>
    <!-- desktop navbar start -->
    <div class="desktop-nav py-4 d-none d-xl-block">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="logo" style="width: 110px; margin-bottom: -20px">
            <NuxtLink to="/">
              <img
                width="100%"
                src="/icons/DEVELOPER TEST - Logo Black.png"
                alt=""
              />
            </NuxtLink>
          </div>
          <div class="navs d-flex flex-column justify-content-between">
            <div
              class="upper-nav d-flex gap-4 justify-content-end text-capitalize fw-light fs-6"
            >
              <NuxtLink to="/" class="text-decoration-none text-dark"
                >home</NuxtLink
              >
              <NuxtLink to="/products" class="text-decoration-none text-dark"
                >products</NuxtLink
              >
              <a class="text-decoration-none text-dark" href="#">about us</a>
              <a class="text-decoration-none text-dark" href="#"
                >media center</a
              >
              <a class="text-decoration-none text-dark" href="#">contact us</a>
              <a class="text-decoration-none text-dark fw-bold" href="#">AR</a>
            </div>
            <div class="lower-nav d-flex align-items-center gap-5">
              <div class="categories d-flex gap-4 fw-bold text-uppercase fs-5">
                <NuxtLink
                  to="/categories/electronics"
                  class="text-decoration-none text-color-1"
                  >electronics
                </NuxtLink>
                <NuxtLink
                  to="/categories/jewelery"
                  class="text-decoration-none text-color-1"
                  >jewelry
                </NuxtLink>
                <NuxtLink
                  to="/categories/men's clothing"
                  class="text-decoration-none text-color-1"
                  >men clothing
                </NuxtLink>
                <NuxtLink
                  to="/categories/women's clothing"
                  class="text-decoration-none text-color-1"
                  >women clothing
                </NuxtLink>
              </div>
              <div class="btns d-flex text-capitalize fs-6">
                <div class="position-relative" style="height: fit-content">
                  <input
                    id="search"
                    type="text"
                    placeholder="search"
                    class="search"
                    v-model="search"
                  />
                  <label class="search-icon" for="search">
                    <img width="20px" src="/icons/Search Mouve.png" alt="" />
                  </label>
                </div>
                <button class="btn">
                  <img width="20px" src="/icons/Login.png" alt="" />
                </button>
                <button class="btn">
                  <img width="20px" src="/icons/heart_11613265.png" alt="" />
                </button>
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasEnd"
                  aria-controls="offcanvasEnd"
                  class="btn position-relative"
                >
                  <span
                    v-show="cartItemsCount"
                    class="position-absolute mt-2 me-3 top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {{ cartItemsCount }}
                  </span>
                  <img width="20px" src="/icons/Cart.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- desktop navbar end -->
    <!-- mobile navbar start -->
    <!-- header start -->
    <nav class="d-xl-none">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <NuxtLink to="/">
            <img
              width="100px"
              src="/icons/DEVELOPER TEST - Logo Black.png"
              alt=""
            />
          </NuxtLink>
          <div class="btns d-flex align-items-center text-capitalize fs-6">
            <div
              class="position-relative d-none d-sm-block"
              style="height: fit-content"
            >
              <input
                id="search"
                type="text"
                placeholder="search"
                class="search"
                v-model="search"
              />
              <label class="search-icon" for="search">
                <img width="20px" src="/icons/Search Mouve.png" alt="" />
              </label>
            </div>
            <button class="btn">
              <img width="20px" src="/icons/Login.png" alt="" />
            </button>
            <button class="btn">
              <img width="20px" src="/icons/heart_11613265.png" alt="" />
            </button>
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasEnd"
              aria-controls="offcanvasEnd"
              class="btn position-relative"
            >
              <span
                v-show="cartItemsCount"
                class="position-absolute mt-2 me-3 top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartItemsCount }}
              </span>
              <img width="20px" src="/icons/Cart.png" alt="" />
            </button>
            <button
              class="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMainMenu"
              aria-controls="mobileMainMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <!-- header end -->
    <!-- mobile menu offcanvas start -->
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="mobileMainMenu"
      aria-labelledby="mobileMainMenu"
      @click="closeMenu"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="mobileMainMenuLabel">
          <NuxtLink to="/">
            <img
              width="80px"
              src="/icons/DEVELOPER TEST - Logo Black.png"
              alt=""
            />
          </NuxtLink>
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="list-group rounded-0 border-0">
          <!-- <a
            href="#"
            class="list-group-item list-group-item-action fs-5 border-0"
          >
            home
          </a> -->
          <NuxtLink
            to="/"
            class="list-group-item list-group-item-action fs-5 border-0"
          >
            home
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="list-group-item list-group-item-action fs-5 border-0"
          >
            products
          </NuxtLink>
          <a
            href="#"
            class="list-group-item list-group-item-action fs-5 border-0"
          >
            about us
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action fs-5 border-0"
          >
            media center
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action fs-5 border-0"
          >
            contact us
          </a>

          <!-- <a
            href="#"
            class="list-group-item list-group-item-action fs-5"
          >
            categories
          </a> -->

          <NuxtLink
            to="/categories/electronics"
            class="list-group-item list-group-item-action bg-body-tertiary fs-5"
          >
            electronics
          </NuxtLink>
          <NuxtLink
            to="/categories/jewelery"
            class="list-group-item list-group-item-action bg-body-tertiary fs-5"
          >
            jewelry
          </NuxtLink>
          <NuxtLink
            to="/categories/men's clothing"
            class="list-group-item list-group-item-action bg-body-tertiary fs-5"
          >
            men clothing
          </NuxtLink>
          <NuxtLink
            to="/categories/women's clothing"
            class="list-group-item list-group-item-action bg-body-tertiary fs-5"
          >
            women clothing
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- mobile menu offcanvas end -->
    <!-- mobile navbar end -->
    <!-- cart offcanvas start -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasEnd"
      aria-labelledby="offcanvasEndLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasTopLabel">CART</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="d-flex gap-3 align-items-center p-2 border-dark-subtle rounded-pill"
        >
          <img :src="item.image" width="30px" alt="" />
          <p
            class="fw-semibold text-capitalize text-nowrap overflow-hidden m-0"
          >
            {{ item.title }}
          </p>
          <p class="text-capitalize text-nowrap m-0 ms-auto">
            quantity: {{ item.quantity }}
          </p>
          <button class="btn rounded-circle" @click="removeItemFromCart(item)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="red"
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- cart offcanvas end -->
  </div>
</template>

<script setup>
const { search, cartItems } = storeToRefs(useProductsStore());
const { removeItemFromCart } = useProductsStore();
const cartItemsCount = computed(() =>
  cartItems.value.length > 9 ? "9+" : cartItems.value.length
);
watch(search, () => {
  if (useRoute().fullPath != "/products") {
    navigateTo("/products");
  }
});
function closeMenu() {
  document.querySelector(".offcanvas-start .btn-close").click();
}
</script>

<style>
.search {
  border: none;
  outline: none;
  background: #eeeee4;
  padding: 5px;
}
.search-icon {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
</style>
