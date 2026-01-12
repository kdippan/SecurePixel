# 🛡️ SecurePixel - Browser-Based Image Encryption Tool

<div align="center">

![SecurePixel Banner](https://i.postimg.cc/mD1YFZjj/Secure-Pixel.png)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Deployment](https://img.shields.io/badge/vercel-deployed-black?style=flat-square&logo=vercel)](https://securepixel.vercel.app)
[![Security](https://img.shields.io/badge/encryption-AES--256--GCM-yellow?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square)](http://makeapullrequest.com)

**Turn sensitive photos into digital noise. 100% Client-Side. No Server Uploads.**

[**🚀 Launch Live App**](https://securepixel.vercel.app) · [**🐛 Report Bug**](https://github.com/KDippan/SecurePixel/issues) · [**✨ Request Feature**](https://github.com/KDippan/SecurePixel/issues)

</div>

---

## 📖 About The Project

**SecurePixel** is a secure, open-source web application designed for **client-side image encryption**. Unlike other tools that upload your files to a server, SecurePixel processes everything directly in your browser using the **Web Crypto API**.

It utilizes military-grade **AES-GCM encryption** to transform your images into "Visual Noise" (randomized pixel static). These encrypted noise images are valid PNG files that can be safely hosted on public cloud storage (like ImgBB) or shared on social media without revealing the original content.

### 🌟 Why Use SecurePixel?
* **Privacy First:** Your unencrypted photos never leave your device.
* **Steganographic Output:** Encrypted data is disguised as a glitchy "noise" image.
* **Zero Knowledge:** We don't store your passwords or your data.
* **Cloud Ready:** Automatically uploads encrypted noise to the cloud for easy link sharing.

---

## ⚙️ How It Works (The Magic)

SecurePixel combines cryptography with image manipulation to create a secure container for your data.

### 1. The Encryption Process
1.  **Key Derivation:** We use **PBKDF2** (Password-Based Key Derivation Function 2) with 100,000 iterations to turn your text password into a cryptographic key.
2.  **AES-GCM:** The image file is converted to binary and encrypted using **AES-GCM** (Advanced Encryption Standard - Galois/Counter Mode), which ensures both confidentiality and data integrity.
3.  **Pixel Mapping:** The encrypted binary bytes are mapped to the **Red, Green, and Blue (RGB)** channels of a new HTML5 Canvas.
4.  **Result:** A downloadable PNG image that looks like TV static but holds your encrypted data perfectly.

### 2. The Decryption Process
1.  The app scans the "Noise Image" pixel by pixel to extract the RGB values.
2.  It reconstructs the encrypted binary buffer.
3.  It extracts the unique **Salt** and **IV** (Initialization Vector) embedded in the file header.
4.  Using your password, it attempts to decrypt the data. If the password is correct, the original image is revealed instantly.

---

## 🚀 Key Features

* ✅ **Military-Grade Security:** AES-256-GCM encryption.
* ✅ **Bulk Processing:** Encrypt or decrypt multiple images at once via Drag & Drop.
* ✅ **Auto-Cloud Upload:** Integrated with ImgBB API to host encrypted images automatically.
* ✅ **Dark/Light Mode:** Auto-detects system preferences with a manual toggle.
* ✅ **Responsive UI:** Built with Tailwind CSS for a seamless experience on Mobile and Desktop.
* ✅ **Full-Screen Viewer:** Built-in secure image viewer.

---

## 🛠️ Built With

This project relies on modern web standards and zero external backend dependencies.

* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white) **HTML5 Canvas** - For pixel manipulation.
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E) **Vanilla JS (ES6+)** - Core logic.
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white) **Tailwind CSS** - For responsive styling.
* ![Web Crypto API](https://img.shields.io/badge/Web_Crypto_API-secure-green?style=flat-square) **Web Crypto API** - Native browser cryptography.
* ![Anime.js](https://img.shields.io/badge/anime.js-animation-pink?style=flat-square) **Anime.js** - Smooth UI transitions.

---

## 💻 Getting Started

To run SecurePixel locally on your machine, follow these steps.

### Prerequisites
* A modern web browser (Chrome, Firefox, Edge, Safari).
* Git installed on your machine.

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/KDippan/SecurePixel.git](https://github.com/KDippan/SecurePixel.git)
    ```

2.  **Navigate to the project folder**
    ```bash
    cd SecurePixel
    ```

3.  **Run the application**
    * **Option A (VS Code):** Right-click `index.html` and select "Open with Live Server".
    * **Option B (Python):**
        ```bash
        python -m http.server 8000
        ```
        Then open `http://localhost:8000` in your browser.

    *> **Note:** Cryptography APIs require a Secure Context. Always use `localhost` or `https://`.*

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## ☕ Support the Developer

If SecurePixel helped you keep your data safe, or if you just love open-source privacy tools, consider buying me a coffee! It helps keep the project alive and free.

<a href="https://www.buymeacoffee.com/dippanbhusal" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

### 💖 GitHub Sponsors
You can also support me directly on GitHub to help fund my open-source work.
[**Become a Sponsor**](https://github.com/sponsors/KDippan)

---

## 👤 Author & Contact

**Dippan Bhusal**

* **GitHub:** [@KDippan](https://github.com/KDippan)
* **LinkedIn:** [Dippan Bhusal](https://linkedin.com/in/KDippan)
* **Twitter:** [@DippanBhusal](https://twitter.com/DippanBhusal)
* **Email:** [dippan.connect@gmail.com](mailto:dippan.connect@gmail.com)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p><i>Built with ❤️ for a safer internet.</i></p>
  <p><b>SecurePixel © 2026</b></p>
</div>
