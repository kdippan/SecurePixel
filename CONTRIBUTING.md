# Contributing to SecurePixel

First off, thanks for taking the time to contribute! 🎉

## 🛠️ Development Setup

SecurePixel is built with **Vanilla JavaScript** and **Tailwind CSS**. 

1.  **Fork** the repo.
2.  **Clone** it locally.
3.  **Run** via a local server (e.g., Live Server or Python `http.server`).

## ⚠️ Important Privacy Rules

Since this is a security tool, we have strict guidelines for contributions:

1.  **Isolation of Logic:** The encryption/decryption logic (`script.js`) must remain completely isolated from the analytics logic.
2.  **Analytics:** We use Google Analytics for anonymous usage stats.
    * **Do NOT** add any tracking code that captures user inputs, file names, or image data.
    * **Do NOT** bypass the consent manager. All trackers must wait for the `securepixel_consent` flag.
3.  **Dependencies:** Avoid adding external npm packages unless necessary. We prefer native Browser APIs to minimize supply chain risks.

## 🐛 Found a Bug?

If you find a security vulnerability, please check `SECURITY.md` for reporting instructions. Do not open a public issue for critical security flaws.

## 💡 Submitting a Pull Request

1.  Ensure your code follows existing styles.
2.  Test your changes in both Light and Dark modes.
3.  Verify that encryption works offline.
