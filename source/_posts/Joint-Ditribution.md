---
title: Joint Ditribution
date: 2024-04-18 15:07:04
tags: [Probability, Learning]
categories: [Courses,SI140A]
comment: 'waline'
archive: true
math: true
---
# Lecture_6 Joint Ditribution

## Contents
<div align='center'>{% btn /img/probability/Joint-Ditribution/L6-handwriting.pdf, Lecture_6, %}</div>
1. <a href="https://lmehw.github.io/2024/04/18/Joint-Ditribution/#Discrete-Multivariate-R-V-s">Discrete Multivariate R.V.s</a><br>
2. <a href="https://lmehw.github.io/2024/04/18/Joint-Ditribution/#Continuous-Multivariate-R-V-s">Continuous Multivariate R.V.s</a><br>
3. <a href="https://lmehw.github.io/2024/04/18/Joint-Ditribution/#Covariance-and-Correlation">Covariance and Correlation</a><br>
4. <a href="https://lmehw.github.io/2024/04/18/Joint-Ditribution/#Multinomial-Distribution">Multinomial Distribution</a><br>
5. <a href="https://lmehw.github.io/2024/04/18/Joint-Ditribution/#Multivariate-Normal">Multivariate Normal</a><br>
6. <a href="https://lmehw.github.io/2024/04/18/Joint-Ditribution/#Change-of-Variables">Change of Variables</a><br>
7. <a href="https://lmehw.github.io/2024/04/18/Joint-Ditribution/#Convolutions">Convolutions</a>

### Discrete Multivariate R.V.s

- Foundation
$$
\begin{align}
    \text{CDF: } &F_{\_{X,Y}}(x,y)=P(X\leq x,Y\leq y)\\\\
    \text{PMF: } &p_{\_{X,Y}}(x,y)=P(X=x,Y=y)\\\\
                 &P(X=x)=\sum_y P(X=x,Y=y)
\end{align}
$$

- Conditional PMF
For discrete r.v.s $X$ and $Y$, the conditional PMF of $X$ given $Y=y$ is

$$
P_{X|Y}(x|y)=P(X=x|Y=y)=\frac{P(X=x,Y=y)}{P(Y=y)}.
$$
<span style="font-weight: bold; background-color: #6F42C1;">E.G</span>
Suppose a chicken lays a random number of eggs, $N$, where
and $N\sim\operatorname{Pois}(\lambda)$. Each egg independently hatches with probability $p$ and fails to hatch with probability $q=1-p$. Let $X$ be the number of eggs that hatch and Y the number eggs that hatch and Ythe number that do not hatch, so $X+Y=N.$ What is the joint PMF of $X$ and $Y?$
{% fold info @Solution %}
<div align='center'>
<img src="/img/probability/Joint-Distribution/disc_mul_eg1.png" style="max-height:250px; width:auto;"><img src="/img/probability/Joint-Distribution/disc_mul_eg2.png" style="max-height:250px; width:auto;">
</div>
{% endfold %}

### Continuous Multivariate R.V.s
- Conditional PDF Given an Event
  - The conditional PDF $f_{X|A}$ of a continuous random variable $X$, given an event $A$ with $\mathbf{P}(A)>0$, satisfies
$$
\mathbf{P}(X\in B\mid A)=\int_{B}f_{X\mid A}(x)dx.
$$

  - If $A$ is a subset of the real line with $\mathbf{P} ( X\in A) > 0, $then
$$
f_{X|X\in A}(x)=\begin{cases}
    {\frac{f_{X}(x)}{\mathbf{P}(X\in A)}}&{\mathrm{if\ } x\in A,}\\\\{0,}&{\mathrm{otherwise}}.
\end{cases} 
$$

  - Let $A_1,A_2,\ldots,A_n$ be disjoint events that form a partition of the sample space, and assume that $\mathbf{P}(A_i)>0$ for all $i$. Then,
$$
f_{X}(x)=\sum_{i=1}^{n}\mathbf{P}(A_{i})f_{X|A_{i}}(x)
$$
  (a version of the total probability theorem).


- Joint PDF
$$
f_{X,Y}(x,y)=\frac{\partial^2}{\partial x\partial y}F_{X,Y}(x,y).
$$
- Marginal PDF
$$
f_X\left(x\right)=\int_{-\infty}^\infty f_{X,Y}\left(x,y\right)dy
$$

<span style="font-weight: bold; background-color: #6F42C1;">E.Gs</span>

1. The joint PDF of X and Yis given by
$$
f(x,y)=\begin{cases}\frac{12x(2-x-y)}{5}&\mathrm{if~}0<x<1,0<y<1\\\\
0&\mathrm{otherwise}&&\end{cases}
$$
 Compute the conditional PDF of X given that $Y=y$, where $0<y<1.$

{% fold info @Solution %}
<figure>
<img src="/img/probability/Joint-Distribution/cont_mul_eg_1.png" style="max-height:250px; width:auto;">
</figure>
{% endfold %}

2. Suppose that the joint PDF of $X$ and Yis given by

$$
f(x,y)=\begin{cases}\frac{e^{-x/y-y}}{y}&\text{if }0<x<\infty,0<y<\infty\\\\
0&\text{otherwise}\end{cases}
$$

Find $P \\{ X>1|Y=y \\} .$

{% fold info @Solution %}
<figure>
<img src="/img/probability/Joint-Distribution/cont_mul_eg_2.png" style="max-height:250px; width:auto;">
</figure>
{% endfold %}

- Continuous form of Bayes’ Rule and LOTP
$$
\begin{gathered}
  f_{Y|X}\left(y|x\right)=\frac{f_{X|Y}\left(x|y\right)f_Y\left(y\right)}{f_X\left(x\right)}\\\\
  f_X\left(x\right)=\int_{-\infty}^\infty f_{X|Y}\left(x|y\right)f_Y\left(y\right)dy
\end{gathered}
$$
{% fold info @proof %}

$$
\begin{gathered}
  \small\bullet \quad f_{Y|X}(y|x) = \frac{f_{X,Y}(x,y)}{f_X(x)} = \frac{f_{X|Y}(x|y)f_Y(y)}{f_X(x)}\\\\
  \small\bullet \quad f_X(x) = \int_{-\infty}^\infty f_{X,Y}(x,y)dy = \int_{-\infty}^\infty f_{X|Y}\left(x|y\right)f_Y\left(y\right)dy
\end{gathered}
$$
{% endfold %}

<span style="font-weight: bold; background-color: #6F42C1;">E.G</span>
A light bulb produced by the GE company is known to have an exponential distributed lifetime $Y$. However, the company has been experiencing quality control problems. On any given day, the parameter $\lambda$ of the PDF of $Y$is actually a random variable. uniformly distributed in the interval[1,3/2]. We test a ligut $\omega$ Jrd its lifetime. What we can say about the underlying parameter $\lambda?$
{% fold info @Solution %}
<figure>
<img src="/img/probability/Joint-Distribution/cont_mul_eg_3.png" style="max-height:250px; width:auto;">
</figure>
{% endfold %}

#### General Bayes' Rule & LOTP

<div align='center'>
<img src="/img/probability/Joint-Distribution/general_bayes1.png" style="max-height:200px; width:auto;"><img src="/img/probability/Joint-Distribution/general_bayes2.png" style="max-height:200px; width:auto;">
<p style="text-align:center;">General Bayes’ Rule</p>
</div>

<figure>
<img src="/img/probability/Joint-Distribution/general_lotp.png" style="max-height:300px; width:auto;">
<figcaption>General LOTP</figcaption>
</figure>