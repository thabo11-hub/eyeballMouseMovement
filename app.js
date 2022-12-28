document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById('anchor');
  const rekt = anchor.getBoundingClientRect();

  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  
});
