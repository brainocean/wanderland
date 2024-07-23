import P5 from "npm:p5";

export const unit = 10;

export const viewPort = {
  width: 40,
  height: 40,
};

export function pprint_world(desc, obj) {
  return `${desc} ${JSON.stringify(obj, null, 2)}`;
}

function tick_object(obj) {
  obj.x = (obj.x || 0) + obj.velocity;
}

function tick_world(world) {
  world.objects.forEach(tick_object);
}

function render_object(sketch, obj) {
  let pos = sketch.createVector(obj.x || 0, obj.y || 0);
  switch (obj.type) {
    case "ball":
      // sketch.circle(obj.x || 0, obj.y || 0, unit);
      pos = transform(pos, sketch);
      sketch.circle(pos.x, pos.y, unit);
      break;
    case "box":
      pos = transform(pos, sketch);
      sketch.rect(pos.x, pos.y, unit, unit);
      break;
    default:
      break;
  }
}

function get_or_create_canvas_element(canvasId) {
  let canvasElm;
  if (canvasId) {
    canvasElm = document.getElementById(canvasId);
  }
  if (!canvasElm) {
    canvasElm = document.createElement("canvas");
  }
  return canvasElm;
}

function transform(posVec, sketch) {
  return sketch.createVector(posVec.x + sketch.width/2, -posVec.y + sketch.height/2);
}

function transformCoordinates(sketch) {
  // build our coordinate system:
  // center of (width, height) is the origin, x to right and y to up
  sketch.translate(sketch.width / 2, sketch.height / 2);
  sketch.scale(1, -1);
}

function drawAxes(sketch) {
  const width = sketch.width;
  const height = sketch.height;
  const tickLength = 2;
  const tickSpace = 20;
  const tickLabelSpace = 10;
  const axesColor = sketch.color(100, 100, 100, 200);
  // const axesColor = 'white';
  const tickTextSize = 6;

  sketch.stroke(axesColor);
  sketch.fill(axesColor);
  sketch.textSize(tickTextSize);
  sketch.textAlign(sketch.CENTER, sketch.CENTER);

  // 绘制 x 轴
  const xEnds = transform(sketch.createVector(width/2, 0), sketch);
  sketch.line(-xEnds.x, xEnds.y, xEnds.x, xEnds.y);

  // 绘制 x 轴刻度
  for (let x = -xEnds.x; x <= xEnds.x; x += tickSpace) {
    const tickFromPos = transform(sketch.createVector(x, 0), sketch);
    const tickToPos = transform(sketch.createVector(x, tickLength), sketch);
    sketch.line(tickFromPos.x, tickFromPos.y, tickToPos.x, tickToPos.y);
    const labelPos = transform(sketch.createVector(x, tickLabelSpace), sketch);
    sketch.text(x, labelPos.x, labelPos.y);
  }

  // 绘制 y 轴
  const yEnds = transform(sketch.createVector(0, -height/2), sketch);
  sketch.line(yEnds.x, -yEnds.y, yEnds.x, yEnds.y);

  // 绘制 y 轴刻度
  for (let y = -yEnds.y; y <= yEnds.y; y += tickSpace) {
    const tickFromPos = transform(sketch.createVector(0, y), sketch);
    const tickToPos = transform(sketch.createVector(tickLength, y), sketch);
    sketch.line(tickFromPos.x, tickFromPos.y, tickToPos.x, tickToPos.y);
    const labelPos = transform(sketch.createVector(tickLabelSpace, y), sketch);
    sketch.text(y, labelPos.x, labelPos.y);
  }

  sketch.stroke("white");
  sketch.fill("white");
}

export function observe_world(world, options) {
  const { canvasId, showAxes } = options || {};
  const canvasElm = get_or_create_canvas_element(canvasId);
  new P5((sketch) => {
    sketch.setup = function () {
      sketch.createCanvas(
        viewPort.width * unit,
        viewPort.height * unit,
        canvasElm
      );
      sketch.rectMode(sketch.CENTER);
    };
    sketch.draw = function () {
      // transformCoordinates(sketch);
      tick_world(world);
      sketch.background(world.background || "black");
      if (showAxes) drawAxes(sketch);
      world.objects.forEach((obj) => {
        render_object(sketch, obj);
      });
    };
  });
  return canvasElm;
}
