# 第二幕 惯性定律/牛顿第一定律

```js
import {pprint_world, observe_world} from "../components/world.js";
```

漫漫：什么是“惯性……定律”？

牛顿：**如果没有外力作用，一个静止的物体将保持静止状态，一个运动的物体将保持匀速直线运动状态。**

牛顿：你看这个小球漂浮在真空中，完全静止，如果你不给它一个力，它会永远静止下去。

```js
const small_world = {
    objects: [{type:'ball', velocity: v}]
}
display(pprint_world('小小的世界', small_world)) 
```

```js
observe_world(small_world)
```

漫漫：那我推它一下试试看。

```js
const v = view(Inputs.button([
  ["Increment", value => value + 1],
  ["Decrement", value => value - 1],
  ["Reset", value => 0]
], {value: 0, label: "Velocity"}));
```

漫漫：怎么这么慢？能不能再快点？

牛顿：多快才是快呢？快是什么？

漫漫：就是……走起来很快呀！

牛顿：走又是什么？