import P5 from "npm:p5"

export const unit = 10

export const view_port = {
    width: 20,
    height: 20
}

export const world = {
   background: "black" 
}

export function render_world() {
  let canvsElm = document.createElement("canvas");
  new P5(sketch => {
    sketch.setup = function(){
      sketch.createCanvas(view_port.width * unit, view_port.height * unit, canvsElm); 
    }
    sketch.draw = function(){
      sketch.background(world.background);
      //TODO: render the world
    }
  });
  return canvsElm;
}