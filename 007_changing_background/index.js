let colors = new Array(
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0]
);

let step = 0;
let colorIndices = [0, 1, 2, 3];
let gradientSpeed = 0.002;

function updateGradient() {
  if ($ === undefined) return;
  let c0_0 = colors[colorIndices[0]];
  let c0_1 = colors[colorIndices[1]];
  let c0_2 = colors[colorIndices[2]];

  let c1_1 = colors[colorIndices[3]];
  let istep = 1 - step;

  let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  let color1 = `rgb(${r1},${g1},${b1})`;

  let r2 = Math.round(istep * c1_0[0] + step * c1_1[1]);
  let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  let color2 = `rgb(${r2},${g2},${b2})`;

  $("#gradient").css({
    background:
      "-webkit-gradient(lienar, left top, right top, from(" +
      color1 +
      "), to(" +
      color2 +
      "))",
  });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}
