const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const nameEl = document.querySelector(".carousel-name");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 4;


items.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === currentIndex) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll(".dot"));

function updateCarousel() {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === currentIndex);
  });

const itemWidth = items[0].offsetWidth + 27;


const centerIndex = Math.floor(items.length / 2); // 9 -> 4

const offset = (currentIndex - centerIndex) * itemWidth * -1;

track.style.transform = `translateX(${offset}px)`;



  nameEl.style.opacity = 0;
  setTimeout(() => {
    nameEl.textContent = items[currentIndex].dataset.name;
    nameEl.style.opacity = 1;
  }, 200);


  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

updateCarousel();


let startX = 0;

function handleSwipe(endX) {
  if (endX - startX > 50) {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  } else if (startX - endX > 50) {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  }
  updateCarousel();
}

track.addEventListener("mousedown", e => startX = e.clientX);
track.addEventListener("mouseup", e => handleSwipe(e.clientX));
track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
track.addEventListener("touchend", e => handleSwipe(e.changedTouches[0].clientX));
