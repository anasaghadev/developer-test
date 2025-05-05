<template>
  <div class="hero-section py-5">
    <div
      class="container h-100 d-flex flex-column justify-content-center align-items-start"
    >
      <h2 class="text-color-1 fs-1 fw-bold">SALE</h2>
      <p class="text-uppercase fw-semibold text-color-2 fs-5">
        access a limited selection <br />
        with up to 70% off
      </p>
      <button class="btn hero-btn text-uppercase fs-3 text-white py-3 mt-3">
        shop now
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style>
.hero-section {
  background-image: url("/Images/Header.jpg");
  background-position: left center;
  background-size: cover;
  /* background-attachment: fixed; */
  height: calc(100lvh - 100px);
}

@media (min-width: 1200px) {
  .hero-section {
    height: calc(100lvh - 138px);
    background-position: left center;
  }
}
@media (max-width: 600px) {
  .hero-section {
    background-position: -60px center;
  }
}
.hero-btn {
  background-image: url("/icons/Bottun.png");
  background-size: cover;
  background-position: right bottom;
  padding-right: 120px;
  padding-left: 30px;
  /* aspect-ratio: 358/106; */
  border: none;
  outline: none;
  border-radius: 0;
  width: max-content;
}
</style>
