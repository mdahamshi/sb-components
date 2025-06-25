import './Dropdown.css'
export class Dropdown {
  constructor(dropdownEl) {
    this.dropdownEl = dropdownEl;
    this.toggleBtn = dropdownEl.querySelector('.dropdown-toggle');
    this.menu = dropdownEl.querySelector('.dropdown-menu');
    this.triggerType = dropdownEl.dataset.trigger || 'click';

    this._bindEvents();
  }

  _bindEvents() {
    if (this.triggerType === 'hover') {
      this.dropdownEl.addEventListener('mouseenter', () => this.show());
      this.dropdownEl.addEventListener('mouseleave', () => this.hide());
    } else {
      this.toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });

      // Optional: click outside to close
      document.addEventListener('click', (e) => {
        if (!this.dropdownEl.contains(e.target)) {
          this.hide();
        }
      });
    }
  }

  show() {
    this.dropdownEl.classList.add('show');
  }

  hide() {
    this.dropdownEl.classList.remove('show');
  }

  toggle() {
    this.dropdownEl.classList.toggle('show');
  }
}
