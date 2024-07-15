import P5 from "npm:p5";

export const unit = 10;

export const view_port = {
  width: 20,
  height: 20,
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
  switch (obj.type) {
    case "ball":
      sketch.circle(
        (view_port.width * unit) / 2 + (obj.x || 0),
        (view_port.height * unit) / 2 + (obj.y || 0),
        unit
      );
      break;
    case "box":
      sketch.rect(
        (view_port.width * unit) / 2 + (obj.x || 0),
        (view_port.height * unit) / 2 + (obj.y || 0),
        unit,
        unit
      );
      break;
    default:
      break;
  }
}

function get_or_create_canvas_element(canvasId) {
  let canvasElm;
  if (canvasId) {
    canvasElm = document.getElementById(canvasId);
    console.log(`found canvas element with id: ${canvasId}`);
  }
  if (!canvasElm) {
    canvasElm = document.createElement("canvas");
  }
  return canvasElm;
}

export function observe_world(world, canvasId, updates = true) {
  const canvasElm = get_or_create_canvas_element(canvasId);
  new P5((sketch) => {
    sketch.setup = function () {
      sketch.createCanvas(
        view_port.width * unit,
        view_port.height * unit,
        canvasElm
      );
      sketch.rectMode(sketch.CENTER);
      if (!updates) {
        tick_world(world);
        sketch.background(world.background || "black");
        world.objects.forEach((obj) => {
          render_object(sketch, obj);
        });
      }
    };
    if (updates) {
      sketch.draw = function () {
        tick_world(world);
        sketch.background(world.background || "black");
        world.objects.forEach((obj) => {
          render_object(sketch, obj);
        });
      };
    }
  });
  return canvasElm;
}
