export const draw_grid = (
  canvas,
  context,
  stroke = "#00FF00",
  fill = "#00AA00",
  minor = 10,
  major = 50,
  lineMin = 0.3,
  lineMax = 0.6
) => {
  context.save();
  context.strokeStyle = stroke;
  context.fillStyle = fill;
  for (let x = 0; x < canvas.width; x += minor) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.lineWidth = x % major === 0 ? lineMax : lineMin;
    if (x % major === 0) {
      context.fillText(`${x}`, x, 10);
      context.fill();
    }
    context.stroke();
  }
  for (let y = 0; y < canvas.height; y += minor) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.lineWidth = y % major === 0 ? lineMax : lineMin;
    if (y % major === 0) {
      context.fillText(`${y}`, 0, y + minor);
      context.fill();
    }
    context.stroke();
  }

  context.restore();
};

export const draw_ship = (canvas,context, x, y, radius, options) => {
  options = options || {};
   context.save();
  // optionally draw a guide showing the collision radius
  if (options.guide) {
    context.strokeStyle = "white";
    context.fillStyle = "rgba(0, 0, 0, 0.25)";
    context.lineWidth = 0.5;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
  }
  // set some default values
  context.lineWidth = options.lineWidth || 2;
  context.strokeStyle = options.stroke || "white";
  context.fillStyle = options.fill || "black";
  let angle = (options.angle || 0.5 * Math.PI) / 2;
  // draw the ship in three lines
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(
    x + Math.cos(Math.PI - angle) * radius,
    y + Math.sin(Math.PI - angle) * radius
  );
  context.strokeStyle = "#FFF";
  context.lineTo(
    x + Math.cos(Math.PI + angle) * radius,
    y + Math.sin(Math.PI + angle) * radius
  );
  context.closePath();
  context.fill();
  context.stroke();
  context.restore();
};
