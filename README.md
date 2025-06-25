## 📦 `@sarawebs/sb-components`

A lightweight and modular component library from **SaraWebs**, starting with a fully reusable **Dropdown** system and built with flexibility in mind — perfect for client dashboards, internal tools, and modern web apps.

Designed with **composition**, **zero dependencies**, and **real-world use** in mind. More components coming soon 🚀.

---

### ✨ Features

* 🧱 **Composable Architecture**
  Clean, class-based structure using best practices in reusable JavaScript.

* 🔁 **Multiple Instances**
  Easily supports multiple dropdowns per page — all independently controlled.

* 🖱️ **Click or Hover Triggers**
  Choose trigger behavior via `data-trigger` — no code changes required.

* 🧩 **Expandable Design**
  Built as a foundation for future UI components like modals, tabs, toasts, and tooltips.

* ⚙️ **Zero Dependencies**
  Lightweight and bundler-friendly. No need for jQuery or bulky UI libs.

---

### 📚 API Reference

#### Installation

```bash
npm install @sarawebs/sb-components
```

---

### 🧭 Current Component: Dropdown

#### HTML Example

```html
<div class="dropdown" data-trigger="click">
  <button class="dropdown-toggle">Open Menu</button>
  <ul class="dropdown-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
  </ul>
</div>
```

> You can switch behavior by using `data-trigger="hover"` instead.

---

#### JS Usage

```js
import '@sarawebs/sb-components/dist/style.css';
import { Dropdown } from '@sarawebs/sb-components';

document.querySelectorAll('.dropdown').forEach(dropdownEl => {
  new Dropdown(dropdownEl);
});
```

---

#### Class: `Dropdown`

| Method     | Description                            |
| ---------- | -------------------------------------- |
| `show()`   | Opens the dropdown programmatically    |
| `hide()`   | Closes the dropdown                    |
| `toggle()` | Toggles between open and closed states |

##### Data Attributes

| Attribute      | Values                 | Description                        |
| -------------- | ---------------------- | ---------------------------------- |
| `data-trigger` | `"click"` \| `"hover"` | Sets dropdown interaction behavior |

---

### 🎨 Styling (Basic)

```css
.dropdown-menu {
  display: none;
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  z-index: 1000;
}

.dropdown.show .dropdown-menu {
  display: block;
}
```

You can style or animate however you like. The module doesn’t enforce design.

---

### 🛠️ Planned Components

Coming soon:

* ✅ Dropdown
* ⏳ Modal
* ⏳ Tooltip
* ⏳ Toast
* ⏳ Tab Switcher
* ⏳ Collapsible Panels

---

### 💡 Use Cases

* Navigation headers
* Action menus (settings, logout, filters)
* Admin panels and CMS UI
* Reusable frontend patterns for small-to-medium apps

---

### 🌐 Website

Built with ❤️ by [SaraWebs](https://sarawebs.com)

