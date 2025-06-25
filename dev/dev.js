import { Dropdown } from '../src/components/Dropdown/Dropdown.js';

document.querySelectorAll('.dropdown').forEach(dropdownEl => {
  new Dropdown(dropdownEl);
});
