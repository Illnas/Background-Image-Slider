let right = document.getElementById("right");
let left = document.getElementById("left");
let img = document.getElementById("img");
let count = 0;

let imgArray = [
  ["0.jpg", "url: https://unsplash.com/photos/iUA1cea8QiY"],
  ["1.jpg", "url: https://unsplash.com/photos/_HwGcoyr5Gk"],
  ["2.jpg", "url: https://unsplash.com/photos/EezLu2p93uM"],
  ["3.jpg", "url: https://unsplash.com/photos/_f7mBDzXIKw"],
  ["4.jpg", "url: https://unsplash.com/photos/p6m_BWCHzJE"],
  ["5.jpg", "url: https://unsplash.com/photos/7cfAzY0mj9w"],
  ["6.jpg", "url: https://unsplash.com/photos/In3VT75Nb2A"],
  ["7.jpg", "url: https://unsplash.com/photos/VEco5HQZvO0"],
  ["8.jpg", "url: https://unsplash.com/photos/cZmZShc_iqc"],
  ["9.jpg", "url: https://unsplash.com/photos/ZoIR9g8-u6c"],
  ["10.jpg", "url: https://unsplash.com/photos/XlmmwJooTMs"],
  ["11.jpg", "url: https://unsplash.com/photos/MKzoAADK9F4"],
];

img.style.backgroundImage = `url(img/${[count]}.jpg)`;
left.disabled = true;

right.onclick = () => {
  count++;
  img.style.backgroundImage = `url(img/${[count]}.jpg)`;
  left.disabled = false;
  console.log(count);
  if (count >= 11) {
    right.disabled = true;
  }
};

left.onclick = () => {
  count--;
  right.disabled = false;
  img.style.backgroundImage = `url(img/${[count]}.jpg)`;
  console.log(count);
  if (count <= 0) {
    left.disabled = true;
  }
};
