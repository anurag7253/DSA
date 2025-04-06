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
// Canva cloud 
const canvas = document.getElementById('bankCloudCanvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const banks = [
  "Axis Bank", "Bandhan Bank", "CSB Bank", "City Union Bank", "DCB Bank",
  "Dhanlaxmi Bank", "Federal Bank", "HDFC Bank", "ICICI Bank", "IDBI Bank",
  "IDFC First Bank", "IndusInd Bank", "J&K Bank", "Karnataka Bank",
  "Karur Vysya Bank", "Kotak Bank", "Nainital Bank", "RBL Bank",
  "South Indian Bank", "TMB Bank", "YES Bank"
];

const radius = 150;
const focalLength = 300;
const iconSize = 10;

let rotationX = 0.002;
let rotationY = 0.002;

const points = [];

// Generate positions on a sphere
const phi = Math.PI * (3 - Math.sqrt(5));
banks.forEach((bank, i) => {
  const y = 1 - (i / (banks.length - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const theta = phi * i;
  const x = Math.cos(theta) * r;
  const z = Math.sin(theta) * r;
  points.push({ x: x * radius, y: y * radius, z: z * radius, name: bank });
});

function project(point) {
  const scale = focalLength / (focalLength + point.z);
  return {
    x: point.x * scale + canvas.width / 2,
    y: point.y * scale + canvas.height / 2,
    scale
  };
}

function rotate(point) {
  // Rotate around Y-axis
  let x = point.x * Math.cos(rotationY) - point.z * Math.sin(rotationY);
  let z = point.x * Math.sin(rotationY) + point.z * Math.cos(rotationY);
  point.x = x;
  point.z = z;

  // Rotate around X-axis
  let y = point.y * Math.cos(rotationX) - point.z * Math.sin(rotationX);
  z = point.y * Math.sin(rotationX) + point.z * Math.cos(rotationX);
  point.y = y;
  point.z = z;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let point of points) {
    rotate(point);
    const proj = project(point);

    ctx.globalAlpha = proj.scale;
    ctx.beginPath();
    ctx.arc(proj.x, proj.y, iconSize * proj.scale, 0, Math.PI * 2);
    ctx.fillStyle = "#3498db";
    ctx.fill();

    ctx.font = `${14 * proj.scale}px Arial`;
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.fillText(point.name, proj.x, proj.y - 15 * proj.scale);
  }

  requestAnimationFrame(draw);
}

draw();
