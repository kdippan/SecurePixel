# Contributing to SecurePixel

First off, thanks for taking the time to contribute! 🎉

SecurePixel is an open-source project, and we love to receive contributions from our community — you! There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests, or writing code which can be incorporated into the project itself.

## 🛠️ Development Setup

SecurePixel is built with **Vanilla JavaScript** and **Tailwind CSS**. It requires no build step for the logic, but runs best in a secure context.

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone [https://github.com/YOUR-USERNAME/SecurePixel.git](https://github.com/YOUR-USERNAME/SecurePixel.git)
    cd SecurePixel
    ```
3.  **Run the project**:
    Because we use the `Web Crypto API`, the app must be served over `localhost` or `https`.
    * **VS Code:** Use the "Live Server" extension.
    * **Python:** `python -m http.server 8000`
    * **Node:** `npx serve`

## 🐛 Found a Bug?

If you find a bug in the source code, you can help us by [submitting an issue](https://github.com/KDippan/SecurePixel/issues) to our GitHub Repository. Even better, you can submit a Pull Request with a fix.

## 💡 Submitting a Pull Request (PR)

1.  Fork the repo and create your branch from `main`.
2.  If you've added code that should be tested, add tests.
3.  Ensure your code follows the existing style (clean JS, utility-first CSS).
4.  Make sure your code doesn't break the encryption logic.
5.  Issue that PR!

### Coding Guidelines
* **Javascript:** Use modern ES6+ syntax. Avoid jQuery or heavy libraries.
* **CSS:** Use Tailwind CSS utility classes. Avoid writing custom CSS in `style.css` unless absolutely necessary (e.g., for animations).
* **Privacy:** Never add analytics or tracking scripts. This is a privacy tool.

## ☕ Support

If you like what we do, maybe buy us a coffee?
[Buy Me A Coffee](https://www.buymeacoffee.com/dippanbhusal)
