# 自定义图标使用说明

## 项目中的自定义图标

项目中包含了一套自定义的表情图标，位于 `src/assets/icon` 目录下。这些图标是通过 iconfont 字体文件实现的。

## 如何使用自定义图标

### 1. 引入图标字体文件

在 [main.js](file:///C:/Users/ROG/WebstormProjects/test_vue_admin/src/main.js) 中已经引入了图标字体文件：

```javascript
import './assets/icon/iconfont.css' // 引入自定义图标字体
```

### 2. 使用图标

使用图标只需要在 HTML 中添加相应的 class：

```html
<!-- 基本用法 -->
<i class="iconfont icon-haha"></i>

<!-- 带样式 -->
<i class="iconfont icon-chijing" style="font-size: 24px; color: #409EFF;"></i>
```

### 3. 可用图标列表

| 图标名称 | 类名 |
|---------|------|
| 无语 | icon-wuyu |
| 馋 | icon-chan |
| 哈喽 | icon-halou |
| 思考 | icon-sikao |
| 笑了 | icon-xiaole |
| 崇拜 | icon-chongbai |
| 吃惊 | icon-chijing |
| 晕 | icon-yun |
| 想玩 | icon-xiangwan |
| 嘿 | icon-hei |
| 睡觉 | icon-shuijue |
| 切 | icon-qie |
| 疑问 | icon-yiwen |
| 哈哈 | icon-haha |
| 来一口 | icon-laiyikou |
| 哼 | icon-heng |
| 调皮 | icon-tiaopi |
| 哦呦 | icon-oyou |
| 很伤心 | icon-henshangxin |
| 伤心 | icon-shangxin |
| 笑哭 | icon-xiaoku |
| 耍酷 | icon-shuaku |
| 感动 | icon-gandong |
| 嘿嘿 | icon-heihei |
| 流汗 | icon-liuhan |

### 4. 示例代码

```vue
<template>
  <div>
    <p><i class="iconfont icon-haha"></i> 哈哈表情</p>
    <p><i class="iconfont icon-shangxin" style="color: red;"></i> 伤心表情</p>
    <p><i class="iconfont icon-chijing" style="font-size: 24px;"></i> 大吃惊表情</p>
  </div>
</template>

<style scoped>
/* 可以通过 CSS 控制图标的大小和颜色 */
.iconfont {
  font-size: 16px;
  color: #333;
}
</style>
```

## 注意事项

1. 图标大小可以通过 `font-size` 属性控制
2. 图标颜色可以通过 `color` 属性控制
3. 所有图标都是单色的，颜色会跟随 `color` 属性
4. 如果需要在组件中动态使用图标，可以使用 Vue 的 class 绑定：

```vue
<template>
  <i class="iconfont" :class="`icon-${iconName}`"></i>
</template>

<script setup>
import { ref } from 'vue'

const iconName = ref('haha') // 可以动态改变
</script>
```