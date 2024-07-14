import P5 from "npm:p5";

export const unit = 10;

export const view_port = {
  width: 20,
  height: 20,
};

export function pprint_world(desc, obj) {
  return `${desc} ${JSON.stringify(obj, null, 2)}`;
}

export function observe_world(world) {
  let canvsElm = document.createElement("canvas");
  new P5((sketch) => {
    sketch.setup = function () {
      sketch.createCanvas(
        view_port.width * unit,
        view_port.height * unit,
        canvsElm
      );
    };
    sketch.draw = function () {
      sketch.background("black");
      world.objects.forEach((obj) => {
        sketch.circle(
          (view_port.width * unit) / 2,
          (view_port.height * unit) / 2,
          unit
        );
      });
    };
  });
  return canvsElm;
}
