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
}
