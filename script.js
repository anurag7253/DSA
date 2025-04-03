// Header menu 
document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (!dropdownToggle || !dropdownMenu) return; // Prevent errors

  dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
      dropdownMenu.classList.remove('active');
    }
  });
});

async function centerWithFlexbox() {
  const parent = $0.parentElement;
  await setElementStyles(parent, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  });
}
