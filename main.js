import { draw_grid, draw_ship } from './drawing.js' ;

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

draw_grid(canvas, context);
draw_ship(canvas, context, 200, 200, 150, {guide: true});
draw_ship(canvas, context, 75, 75, 50, {stroke: 'gold', fill:
'purple'});
draw_ship(canvas, context, 325, 325, 50, {angle: 0.8 * Math.PI,
guide: true});
draw_ship(canvas, context, 75, 325, 50, {angle: 0.3 * Math.PI, guide:
true});
draw_ship(canvas,context, 325, 75, 50, {lineWidth: 8, fill: 'blue'});