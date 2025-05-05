<template>
  <div class="jewelry-section py-5">
    <div
      class="container h-100 d-flex flex-column justify-content-end align-items-start"
    >
      <button class="btn jwelery-btn text-uppercase fs-4 py-2">see more</button>
    </div>
  </div>
</template>

<script setup></script>

<style>
.jewelry-section {
  background-image: url("/Images/Jewelry.jpg");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: calc(100lvh);
}

.jwelery-btn {
  background-image: url("/icons/Bottun White.png");
  background-size: cover;
  background-position: right bottom;
  padding-right: 80px;
  padding-left: 20px;
  /* aspect-ratio: 358/106; */
  border: none;
  outline: none;
  border-radius: 0;
  width: max-content;
}
</style>
