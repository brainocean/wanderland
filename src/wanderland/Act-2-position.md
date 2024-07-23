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
observe_world(world_with_a_thing_somewhere)
```

笛卡尔：想必你已经带着刚才的问题来了吧，球在哪里？

漫漫：我说不清楚……

笛卡尔：那么我帮你画一个尺子吧。

```js
observe_world(world_with_a_thing_somewhere, {showAxes:true})
```
