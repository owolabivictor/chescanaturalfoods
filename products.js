const sizePicker = document.querySelectorAll(".size-picker");
const productCardInfo = document.querySelectorAll(".product-card-info");

let size = "500g";

productCardInfo.forEach((productCardInfo) => {
  const productTitle = productCardInfo.querySelector("h3").textContent;

  productCardInfo.querySelector(".button").href =
    `https://wa.me/2348037110495?text=${encodeURIComponent(
      `Good day, CHESCA Natural Foods. I would like to place an order for ${productTitle} in ${size} size. Kindly provide me with the details on how I can complete my order. Thank you.`,
    )}`;
});

sizePicker.forEach((sizePicker) => {
  sizePicker.querySelector(".size-buttons").addEventListener("click", (e) => {
    if (e.target.classList.contains("size-btn")) {
      sizePicker.querySelectorAll(".size-btn").forEach((sizeBtn) => {
        sizeBtn.classList.remove("active");
      });

      e.target.classList.add("active");
      sizePicker.querySelector(".quantity-label").textContent =
        `Selected: ${e.target.textContent}`;

      const productTitle =
        sizePicker.parentElement.querySelector("h3").textContent;

      sizePicker.parentElement.querySelector(".button").href =
        `https://wa.me/2348037110495?text=${encodeURIComponent(
          `Good day, CHESCA Natural Foods. I would like to place an order for ${productTitle} in ${e.target.textContent} size. Kindly provide me with the details on how I can complete my order. Thank you.`,
        )}`;
    }
  });
});
