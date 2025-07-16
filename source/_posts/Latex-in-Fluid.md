---
title: Latex in Fluid
date: 2024-04-18 16:39:04
categories: [Tips,Fluid]
excerpt: Something that is useful in Fluid
index_img: /img/some-problems/wallhaven-jxoxjm_2560x1440.jpg
math: true
---

## $\LaTeX$

### 关于换行

由于Fluid在渲染latex公式时，会将`\\`替换为`\`，所以尝试`\\\\`来替换`\\`，但仍会出现无法正确渲染的问题。现给出几种解决办法。

```latex
方法一：结合‘&’与‘\\\\’
\begin{align}
\end{align}
问题：无法自动居中，必须手动设置对齐

Example:
$$
\begin{align}
(x+y)^n &=\sum_{k=0}^n\binom nkx^{n-k}y^k \\\\
\binom nk &=\frac{n!}{k!(n-k)!}
\end{align}
$$
```
效果：
$$
\begin{align}
(x+y)^n &=\sum_{k=0}^n\binom nkx^{n-k}y^k \\\\
\binom nk &=\frac{n!}{k!(n-k)!}
\end{align}
$$

```latex
方法二：gathered
\begin{gathered}
\end{gathered}

Example:
$$
\begin{gathered}
\int_{-\infty}^\infty e^{-x^2}dx=\sqrt{\pi} \\\\
I^2=\left(\int_{-\infty}^\infty e^{-x^2}dx\right)^2 \\\\
I^2=\int_{-\infty}^\infty e^{-x^2}dx\int_{-\infty}^\infty e^{-y^2}dy=\int_{-\infty}^\infty\int_{-\infty}^\infty e^{-\left(x^2+y^2\right)}dxdy
\end{gathered}
$$
```
效果：
**Show that:**
$$
\begin{gathered}
\int_{-\infty}^\infty e^{-x^2}dx=\sqrt{\pi} \\\\
\because I^2=\left(\int_{-\infty}^\infty e^{-x^2}dx\right)^2 \\\\
\therefore I^2=\int_{-\infty}^\infty e^{-x^2}dx\int_{-\infty}^\infty e^{-y^2}dy=\int_{-\infty}^\infty\int_{-\infty}^\infty e^{-\left(x^2+y^2\right)}dxdy
\end{gathered}
$$

### 关于复杂公式无法渲染

```latex
例如以下例子：
$$
\begin{align}
    &S = (-1)^{\text{Sign}}\\\\
    &E = \text{Exponent}_2-127_{10}\\\\
    &Value = S\times M\times2^E
  \end{align}
$$
```
解决办法：
在下划线`_`前加上`\`
```latex
+   &E = \text{Exponent}\_2-127_{10}\\\\
```

### 花括号无法显示
注意到`\`在Hexo对于数学公式渲染使用的渲染库中的意义：特殊字符，用于转义其他特殊字符。所以在`\{`or`\}`前加上`\`即可。