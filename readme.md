# 🌊 How to make CSS Loader Animation

<p align="center">
  <img src="assets/How to make CSS Loader.gif" alt="Project Demo" width="600" style="border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
</p>

---

### 🌟 Overview
Welcome to the **How to make CSS Loader** project! This project demonstrates how to create a classic equalized wave loader effect using minimal HTML structure, CSS scaling, and **JavaScript** for efficient element generation.

[📺 Watch Live Demo](https://github.io)

---

### 🎨 Visual Preview


| 🖼️ Default State | 🌀 Wave State |
| :---: | :---: |
| <img src="assets/How to make CSS Loader-Image-1.jpg" width="350" alt="Static 1"> | <img src="assets/How to make CSS Loader-Image-2.jpg" width="350" alt="Static 2"> |
| *Bars at normal scale (1)* | *Bars stretched during animation* |

---

### 🚀 Key Features
- ⚡ **Optimized Code:** 6 loading bars are dynamically generated using **JavaScript** to keep the HTML file clean.
- 🌊 **Smooth Wave Motion:** Uses the `alternate` animation direction to create a seamless back-and-forth bounce effect [4].
- ⏱️ **Sequential Delay:** CSS variables (`--i`) calculate the `animation-delay` for each bar perfectly.
- 📱 **Perfectly Centered:** Uses absolute positioning with `transform` to stay locked in the middle of the screen.

---

### 📂 File Structure
```bash
├── index.html   # HTML Markup
├── main.css     # Wave Animations & Styles
├── main.js      # Bar Generator Logic
└── assets       # Images and GIF of the project
