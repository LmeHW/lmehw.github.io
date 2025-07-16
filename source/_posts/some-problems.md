---
title: 一些小技巧
date: 2024-04-16 22:36:44
categories: [Tips, Fluid]
lang: en
index_img: /img/some-problems/wallhaven-jxoxjm_2560x1440.jpg
tags: Tips
math: true
excerpt: Something needs to notice
comment: 'waline'
---

# Fluid 魔改

- <div align = 'center'>{% btn https://hexo.fluid-dev.com/docs/guide/#%E5%85%B3%E4%BA%8E%E6%8C%87%E5%8D%97, Manual, Manual of Fluid %}</div>
- <div align = 'center'>{% btn https://blog.kevinchu.top/2023/07/17/hexo-theme-fluid-modify/, KEVIN'S BLOG,   %}{% btn https://qingshaner.com/Hexo%20Fluid%E4%B8%BB%E9%A2%98%E8%83%8C%E6%99%AF%E5%9B%BA%E5%AE%9A(ES6%E6%94%B9%E5%86%99%E7%89%88)%E4%B8%8E%E6%AF%9B%E7%8E%BB%E7%92%83%E5%BA%95%E9%A1%B5/, 毛玻璃效果,   %}{% btn https://asteri5m.gitee.io/archives/Fluid%E9%AD%94%E6%94%B9%E7%AC%94%E8%AE%B0.html, Asteri5m'S BLOG, %}</div>

{% note warning %}
为了在主题更换中，更好的管理custom的js & css，在source目录下创建自己的 `custom`文件夹。
在其中写入自定义的js和css或者styl文件，然后再主题配置中分别引入。
{% endnote %}

<div align="center">
<img src="/img/some-problems/1713324420724.png" style="max-height:250px; width:auto;">
</div>

## 目录

#### Javascript

1. [恶搞标题](#恶搞标题)
2. [动态线条](#动态线条)

#### CSS

1. [Mac风格代码块](#mac风格代码块)
2. [背景全屏](#背景全屏)
3. [毛玻璃效果](#毛玻璃效果)
4. [导航栏标题添加霓虹灯特效](#导航栏标题添加霓虹灯特效)
5. [解决移动端部分页面评论未加载完成时内部元素出现滚动条的问题](#解决移动端部分页面评论未加载完成时内部元素出现滚动条的问题)

## Javascript

### 恶搞标题

```js
// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '👀页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '👻 噫又好啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});
```

### 动态线条

无法根绝主题模式的切换而变换线条颜色（light：黑色，dark：白色），刷新页面即可。

```js
// 动态线条
var color_dark = "255,255,255"; var color_light = "0,0,0"; var opacity = '0.8'; var zIndex = "-2"; var count = "200"; var Line_act = function (color) { function o(w, v, i) { return w.getAttribute(v) || i } function j(i) { return document.getElementsByTagName(i) } function l() { var i = j("script"), w = i.length, v = i[w - 1]; return { l: w, z: o(v, "zIndex", -1), o: o(v, "opacity", 0.8), c: o(v, "color", color), n: o(v, "count", 100) } } function k() { r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight } function b() { e.clearRect(0, 0, r, n); var w = [f].concat(t); var x, v, A, B, z, y; t.forEach(function (i) { i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1); for (v = 0; v < w.length; v++) { x = w[v]; if (i !== x && null !== x.x && null !== x.y) { B = i.x - x.x, z = i.y - x.y, y = B * B + z * z; y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke()) } } w.splice(w.indexOf(i), 1) }), m(b) } var u = document.createElement("canvas"), s = l(), c = "c_n" + s.l, e = u.getContext("2d"), r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) { window.setTimeout(i, 1000 / 45) }, a = Math.random, f = { x: null, y: null, max: 20000 }; u.id = c; u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o; j("body")[0].appendChild(u); k(), window.onresize = k; window.onmousemove = function (i) { i = i || window.event, f.x = i.clientX, f.y = i.clientY }, window.onmouseout = function () { f.x = null, f.y = null }; for (var t = [], p = 0; s.n > p; p++) { var h = a() * r, g = a() * n, q = 2 * a() - 1, d = 2 * a() - 1; t.push({ x: h, y: g, xa: q, ya: d, max: 6000 }) } setTimeout(function () { b() }, 100) };  /* 以下是我自己改的，将上述函数改为声明，在下面选择调用 */ var lord = document.getElementById("color-toggle-icon").getAttribute('data'); if (lord == "light") { Line_act(color_dark); } else { Line_act(color_light); }
```

### 鼠标小星星特效
```js
!function(){function t(){i(),a()}function i(){document.addEventListener("mousemove",o),document.addEventListener("touchmove",e),document.addEventListener("touchstart",e),window.addEventListener("resize",n)}function n(t){d=window.innerWidth,window.innerHeight}function e(t){if(t.touches.length>0)for(var i=0;i<t.touches.length;i++)s(t.touches[i].clientX,t.touches[i].clientY,r[Math.floor(Math.random()*r.length)])}function o(t){f.x=t.clientX,f.y=t.clientY,s(f.x,f.y,r[Math.floor(Math.random()*r.length)])}function s(t,i,n){var e=new l;e.init(t,i,n),u.push(e)}function h(){for(var t=0;t<u.length;t++)u[t].update();for(t=u.length-1;t>=0;t--)u[t].lifeSpan<0&&(u[t].die(),u.splice(t,1))}function a(){requestAnimationFrame(a),h()}function l(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,i,n){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=n,this.element=document.createElement("span"),this.element.innerHTML=this.character,c(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}function c(t,i){for(var n in i)t.style[n]=i[n]}var r=["#f94a70","#ffd12b","#49c99a","#1f90ed"],d=window.innerWidth,f=(window.innerHeight,{x:d/2,y:d/2}),u=[];t()}();
```


## CSS

### Mac风格代码块

注意文件后缀 `styl`

```styl
.highlight
    background: #21252b
    border-radius: 5px
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, .4)
    padding-top: 30px

    &::before
      background: #fc625d
      border-radius: 50%
      box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b
      content: ' '
      height: 12px
      left: 12px
      margin-top: -20px
      position: absolute
      width: 12px
```

### 背景全屏

```css
/* 设置背景图片 */
body {
    background: url(/img/bg/your_photo.png);
    background-attachment: fixed;
    background-size: cover;  
  }
```

### 毛玻璃效果

```css
/* 文章页背景 */
#board {
  -webkit-backdrop-filter: blur(6px); /* 数字为模糊程度，越高，越不清晰 */
  backdrop-filter: blur(6px);
}

/* 侧边栏（目录）颜色设置。根据背景图片进行调整，我的背景太白导致字体不清晰 */
.sidebar {
  color: black; /* 设置侧边栏中的文本颜色为黑色 */
}
.sidebar a {
  color: black; /* 设置侧边栏中所有链接的颜色为黑色 */
}
```

### 导航栏标题添加霓虹灯特效

```styl
.navbar-title
  outline none
  --c lightseagreen
  text-shadow 0 0 10px var(--c),0 0 20px var(--c),0 0 40px var(--c),0 0 80px var(--c),0 0 160px var(--c)
  animation animate 5s linear infinite

@keyframes animate{
  to{
      filter: hue-rotate(360deg)
  }
}
```

### 解决移动端部分页面评论未加载完成时内部元素出现滚动条的问题

<div align='center'>
<img src="/img/some-problems/loading_pro.png" style="max-height:350px; width:auto;">
</div>

找到对应出现滚动条的标签，给它加上样式`overflow-y: hidden`。例如，对于文章页面，可以修改`themes\fluid\source\css\_pages\_post\post-page.styl`文件，调整`.post-content`，具体修改项：
```styl
.post-content, post-custom
  box-sizing border-box
  padding-left 10%
  padding-right 10%
  overflow-y hidden //加上这一行
```
{% note success %}
To be Conninud...
记录自己所有魔改...
{% endnote %}
