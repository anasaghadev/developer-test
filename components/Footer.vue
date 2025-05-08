<template>
  <div class="footer py-3 bg-black text-white">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div class="col">
          <img class="mw-100" src="/icons/DEVELOPER TEST - Logo.png" alt="" />
          <div
            class="icons-container d-flex gap-3 justify-content-center align-items-center"
          >
            <img width="30px" src="/public/icons/facebook_Gold.png" alt="" />
            <img width="30px" src="/public/icons/Twitter - Gold.png" alt="" />
            <img width="30px" src="/public/icons/Youtube - Gold.png" alt="" />
            <img width="30px" src="/public/icons/instagram_Gold.png" alt="" />
          </div>
        </div>
        <div class="col d-flex flex-column gap-4 text-capitalize pt-5">
          <a href="#" class="text-decoration-none text-white fs-5"> home </a>
          <a href="#" class="text-decoration-none text-white fs-5">
            about us
          </a>
          <a href="#" class="text-decoration-none text-white fs-5">
            media center
          </a>
          <a href="#" class="text-decoration-none text-white fs-5">
            contact us
          </a>
        </div>
        <div class="col d-flex flex-column gap-4 text-capitalize pt-5">
          <NuxtLink
            to="/categories/electronics"
            class="text-decoration-none text-white fs-5"
            >electronics</NuxtLink
          >
          <NuxtLink
            to="/categories/jewelery"
            class="text-decoration-none text-white fs-5"
            >jewelry</NuxtLink
          >
          <NuxtLink
            to="/categories/men's clothing"
            class="text-decoration-none text-white fs-5"
            >men clothing</NuxtLink
          >
          <NuxtLink
            to="/categories/women's clothing"
            class="text-decoration-none text-white fs-5"
            >women clothing</NuxtLink
          >
        </div>
        <div class="col d-flex flex-column gap-4 text-capitalize pt-5">
          <h3 class="fs-3 fw-bold mb-0">Contact Us</h3>
          <p class="fs-5 fw-light mb-0">+971 00 000 0000</p>
          <p class="fs-5 fw-light mb-0">+971 00 000 0000</p>
          <p class="fs-5 fw-light mb-0">info@sample.com</p>
        </div>
      </div>
      <hr
        style="height: 2px; background-color: white; border: none; opacity: 1"
      />
      <p class="text-capitalize text-center fs-5 fs-md-4">
        &copy; developer test 2025. all rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
