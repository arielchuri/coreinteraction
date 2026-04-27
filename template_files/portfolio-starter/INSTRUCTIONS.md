# Portfolio Starter Guide

This project is a lightweight, framework-free portfolio template. It uses modern CSS features like Variables, Grid, and Flexbox, along with native Web Components for reusability.

## 🚀 Key Features

### 1. Reusable Nav & Footer (Web Components)
Instead of copying the navigation and footer to every page, we use **Custom Elements**.
- **The Code:** Look for `<nav-bar></nav-bar>` and `<footer-bar></footer-bar>` in your HTML files.
- **How to Edit:** Open `components.js`. Changing the HTML inside that file will update the menu and footer across **all** pages instantly.

### 2. Gallery Types
We have implemented four modern gallery styles:
- **Split Screen (`project-split.html`):** Impactful hero image next to a description.
- **Responsive Grid + Lightbox (`project-grid.html`):** Classic grid with a native modal overlay.
- **Scroll Carousel (`project-carousel.html`):** Touch-friendly slider using pure CSS.
- **Masonry Gallery (`project-masonry.html`):** Tall, dramatic grid with a blurred peeking lightbox.

### 3. Modern CSS Effects
Check the **Design System (`design-system.html`)** for examples of:
- **Glassmorphism:** Frosty blurs using `backdrop-filter`.
- **Text Balancing:** Perfectly spaced headlines using `text-wrap: balance`.
- **Masonry Layout:** High-performance columns using `column-count`.
- **Custom Selection:** Branded text highlighting.

### 4. Fluid Responsive Layout
- **Mobile Menu:** A hamburger menu is built into `<nav-bar>`. It automatically appears on screens smaller than `768px`.
- **`--container-max`**: The absolute maximum width of your content (default: `1400px`).
- **Wide Mode:** To make the site go full-bleed (edge-to-edge), set `--container-max: 100%;` in `style.css`.

---

## 🛠️ Customization Tips

- **Adding a New Page:** Create a new `.html` file, link `style.css`, and make sure to include `<script src="components.js"></script>` at the bottom so your Nav and Footer show up.
- **Blurred Lightbox:** The masonry gallery uses a `backdrop-filter: blur(20px)` on the `<dialog>` backdrop. You can adjust the intensity in `style.css`.
- **Carousel Peeking:** The `peek-carousel` uses `padding: 0 10%` and `flex: 0 0 80%` to ensure the next and previous items "peek" from the edges.

## 🔗 Helpful Links
- [MDN: Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [MDN: Backdrop Filter (Blur)](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [CSS-Tricks: CSS Column Layout](https://css-tricks.com/almanac/properties/c/column-count/)
