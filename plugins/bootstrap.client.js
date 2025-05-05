export default ({ app }) => {
  // Only run on client side
  if (import.meta.client) {
    const script = document.createElement("script");
    script.src =
      //   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js";
      "/bootstrap/bootstrap.bundle.min.js";
    // script.integrity =
    //   "sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq";
    // script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }
};
