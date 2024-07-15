# 第二幕 “那里”是哪里？——平面直角坐标系

```js
import {pprint_world, observe_world, view_port} from "../components/world.js";
```

笛卡尔：孩子你好！我来帮你创建一个世界。

```js
const world_with_a_thing_somewhere = {
    objects: [{type: 'ball'}],
};
display(pprint_world('有个不知道在哪里的东西的世界', world_with_a_thing_somewhere));
```

```js
observe_world(world_with_a_thing_somewhere, undefined, false)
```

笛卡尔：想必你已经带着刚才的问题来了吧，球在哪里？

漫漫：我不知道。这个世界有无数个方向，或许我们可以试着先把方向减少到……有限个。

笛卡尔：好的，我们把它“拍扁”：

```js
const pre_axis1 = {
    objects: [{type: 'ball'}, {
        type: 'box',
        x: 0,
        y: 2,
    }],
};
(() => {
    view_port.width = 1, view_port.height = 20;
    let canvas = observe_world(pre_axis1, undefined, false);
    view_port.width = 20, view_port.height = 20;
    return canvas;
})()
```

笛卡尔：接着，你看到的就是一条直线了。我们只需要在这条直线上规定小球的位置就好了。现在，想象你站在小球上，直线上的每一个点都可以从小球出发走到。比如，小球上面的那个点，你要走几步呢？

漫漫：