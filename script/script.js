// Add transition effect to specific elements
const elements = document.querySelectorAll('.transition-effect');
elements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.classList.add('transition-effect');
  });

  element.addEventListener('mouseleave', () => {
    element.classList.remove('transition-effect');
  });
});
