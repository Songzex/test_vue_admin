<template>
  <div class="icon-demo">
    <h2>自定义图标演示</h2>
    
    <div class="icon-grid">
      <div class="icon-item" v-for="icon in icons" :key="icon.name">
        <i :class="`iconfont ${icon.class}`"></i>
        <span class="icon-name">{{ icon.name }}</span>
      </div>
    </div>
    
    <div class="usage-example">
      <h3>使用示例</h3>
      <p>
        <i class="iconfont icon-haha"></i>
        这是一个哈哈图标
      </p>
      <p>
        <i class="iconfont icon-chijing" style="font-size: 24px;"></i>
        这是一个吃惊图标，可以调整大小
      </p>
      <p>
        <i class="iconfont icon-shangxin" style="font-size: 32px; color: #F56C6C;"></i>
        这是一个伤心图标，可以调整大小和颜色
      </p>
    </div>
  </div>
</template>

<script setup>
const icons = [
  { name: '无语', class: 'icon-wuyu' },
  { name: '馋', class: 'icon-chan' },
  { name: '哈喽', class: 'icon-halou' },
  { name: '思考', class: 'icon-sikao' },
  { name: '笑了', class: 'icon-xiaole' },
  { name: '崇拜', class: 'icon-chongbai' },
  { name: '吃惊', class: 'icon-chijing' },
  { name: '晕', class: 'icon-yun' },
  { name: '想玩', class: 'icon-xiangwan' },
  { name: '嘿', class: 'icon-hei' },
  { name: '睡觉', class: 'icon-shuijue' },
  { name: '切', class: 'icon-qie' },
  { name: '疑问', class: 'icon-yiwen' },
  { name: '哈哈', class: 'icon-haha' },
  { name: '来一口', class: 'icon-laiyikou' },
  { name: '哼', class: 'icon-heng' },
  { name: '调皮', class: 'icon-tiaopi' },
  { name: '哦呦', class: 'icon-oyou' },
  { name: '很伤心', class: 'icon-henshangxin' },
  { name: '伤心', class: 'icon-shangxin' },
  { name: '笑哭', class: 'icon-xiaoku' },
  { name: '耍酷', class: 'icon-shuaku' },
  { name: '感动', class: 'icon-gandong' },
  { name: '嘿嘿', class: 'icon-heihei' },
  { name: '流汗', class: 'icon-liuhan' }
]
</script>

<style scoped>
.icon-demo {
  padding: 20px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  transition: all 0.3s;
}

.icon-item:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.icon-item i {
  font-size: 24px;
  margin-bottom: 8px;
  /* 添加渐变色使图标显示为彩色 */
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 5s ease infinite;
}

/* 彩色图标动画 */
@keyframes gradientAnimation {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

.icon-name {
  font-size: 12px;
  color: #606266;
}

.usage-example {
  margin-top: 30px;
}

.usage-example p {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.usage-example i {
  margin-right: 10px;
}

/* 单独给示例中的图标添加颜色 */
.usage-example .icon-haha {
  color: #ff6b6b;
}

.usage-example .icon-chijing {
  color: #4ecdc4;
}
</style>