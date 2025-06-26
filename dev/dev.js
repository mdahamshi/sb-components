import { Dropdown } from "../src/components/Dropdown/Dropdown.js";
import { Carousel } from "../src/components/Carousel/Carousel.js";

document.querySelectorAll(".dropdown").forEach((dropdownEl) => {
  new Dropdown(dropdownEl);
});

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "https://picsum.photos/id/1015/800/300",
    "https://picsum.photos/id/1016/800/300",
    "https://picsum.photos/id/1018/800/300",
    "https://picsum.photos/id/1020/800/300",
    "https://picsum.photos/id/1024/800/300",
  ];

  new Carousel(document.querySelector(".carousel"), images, 400);
  new Carousel(document.querySelector("#carousel2"), images.slice(1), 700);
});
