# 第一幕 漫漫世界的初创

```js
import {pprint_world, observe_world} from "../components/world.js";
```

牛顿：孩子你好！

漫漫：你好，我是漫漫。

牛顿：我能帮你做点什么吗漫漫？

漫漫：我想要一个世界。

牛顿：啊！那可是一个宏大的梦想！（闭眼思考了一秒钟）你的世界已经创建好了。

```js
const empty_world = {
    objects: []
};
display(pprint_world('空空的世界', empty_world));
```

漫漫：啊？在哪里？我没看到啊？！

牛顿：孩子，如果想要看到一个世界，你需要观察的窗口。你要记住，观察是所有物理科学的基础和前提。

漫漫：你能帮我开一个窗口吗？

牛顿：好，开一个观察窗口。

```js
observe_world(empty_world)
```

漫漫：哇！世界出现了！但是一片黑乎乎的，里面什么都没有？

牛顿：因为现在这个世界是一个空空的世界。漫漫，你希望你的世界里有什么东西呢？先来个小球怎么样？

漫漫：好啊，让我们试试！

```js
const small_world = {
    objects: ['box']
}
display(pprint_world('小小的世界', small_world))
```

```js
observe_world(small_world)
```

漫漫：我看到一个小球了，不过这没什么意思啊。它停在那里一动不动……

牛顿：孩子，这就是重要的牛顿第一定律：惯性定律。