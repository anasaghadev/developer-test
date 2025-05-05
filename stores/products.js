import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("productsStore", {
  state: () => ({
    products: [],
    search: "",
    categories: [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ],
    cartItems: [],
  }),
  actions: {
    async getProducts() {
      try {
        // Use Nuxt's $fetch for SSR compatibility
        this.products = await $fetch("https://fakestoreapi.com/products");
      } catch (error) {
        console.error("Fetch failed:", error);
        throw error; // Propagate error for handling in components
      }
    },

    async getProduct(id) {
      try {
        return await $fetch(`https://fakestoreapi.com/products/${id}`);
      } catch (error) {
        console.error(`Failed to fetch product ${id}:`, error);
        throw error;
      }
    },

    async getCategoryProducts(category) {
      if (!this.categories.includes(category)) {
        navigateTo("/");
        throw createError({
          statusCode: 404,
          message: "Invalid product category",
        });
      }

      try {
        const products = await $fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        return products;
      } catch (error) {
        console.error(`Failed to fetch ${category} products:`, error);
        throw error;
      }
    },
    addItemToCart(product) {
      document.querySelector('[aria-controls="offcanvasEnd"]').click();
      let exists = false;
      for (let index in this.cartItems) {
        if (this.cartItems[index].id == product.id) {
          exists = true;
          this.cartItems[index].quantity++;
          break;
        }
      }
      if (!exists) {
        product.quantity = 1;
        this.cartItems.unshift(product);
      }
    },
    removeItemFromCart(product) {
      for (let index in this.cartItems) {
        if (this.cartItems[index].id == product.id) {
          this.cartItems.splice(index, 1);
          break;
        }
      }
    },
  },
  persist: true,
});
