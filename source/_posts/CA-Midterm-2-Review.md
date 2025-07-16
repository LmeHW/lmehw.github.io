---
title: CA Midterm_2 Review
date: 2024-04-22 17:26:45
index_img: /img/CA-Midterm-1-Review/wallhaven-jxqgl5_2560x1440.jpg
tags: [CA, Learning]
categories: [课程学习,CA]
math: true
comment: 'waline'
excerpt: CS110 Second Midterm Review
---
# Midterm_2 Review
{% fold info @Lectures  %}
<div align='center'>
{% btn https://cs61c.org/sp24/, CS61C Spring 2024, %}{% btn https://toast-lab.sist.shanghaitech.edu.cn/courses/CS110@ShanghaiTech/Spring-2024/index.html, CS110 Spring 2024, %}{% btn https://www.bilibili.com/video/BV1s7421T7XR?p=28&vd_source=8b3992c24a38bc7fabb30a5d331f57f5, Viedos of 22 Fall, %}
</div>
{% endfold %}

## Datapath & Controller
<div align='center'>
{% btn /img/CA-Midterm-2-Review/L11. Datapath.pdf, Datapath, %}{% btn /img/CA-Midterm-2-Review/L12. Datapath & Controller.pdf, Datapath & Controller, %}
</div>

## Pipeline

### "Iron Law" Of Performance

<div align="center">
<img src="/img/CA-Midterm-2-Review/ironLaw.png" style="max-height:350px; width:auto;">
</div>

<span style="font-weight: bold; background-color: #6F42C1;">E.G</span>
<div align="center">
<img src="/img/CA-Midterm-2-Review/iron_eg.png" style="max-height:350px; width:auto;">
</div>

{% fold info @Solution %}
<div align="center">
<img src="/img/CA-Midterm-2-Review/ir_eg_sol.png" style="max-height:350px; width:auto;">
</div>
{% note warning %}
注意各个部分的含义。
{%endnote%}
{% endfold %}

### Hazards

#### 1. Structural Hazards

- Abstract
由硬件限制引起的。Pipeline中的两个或更多指令争夺单个物理资源。

- Solution:
  1. 指令和数据memory分开(Instruction cache and data cache)
  2. 增加硬件数量
  3. 设计硬件：寄存器在时钟上升沿写入，在后半个时钟周期任意读取 (in the textbook “the second half clock cycle”)
  4. Wait/Stall
<div align="center">
<img src="/img/CA-Midterm-2-Review/struct_hazard.png
" style="max-height:350px; width:auto;">
</div>

#### 2. Data Hazards
- Abstract
    1. RAW(Read after write)
    2. WAW
    3. WAR

- Solition:
  1. Insert bubbles
  2. Forwarding or bypass(寄存器)

<div align="center">
<img src="/img/CA-Midterm-2-Review/data_hazard_sol1.png" style="max-height:250px; width:auto;"><img src="/img/CA-Midterm-2-Review/data_hazard_sol2.png" style="max-height:250px; width:auto;">
</div>

{% note warning %}
How to decide <strong><span style="color: #7030A0;">op1_src</span></strong>?

第一个指令必须写入寄存器，第二指令、第三个指令必须读取寄存器。（分别对应ALU后和Dmem后的转发）
{%endnote%}

- 针对与`lw`指令后的Data Hazards
    - Solution
      - Wait/Stall
      - Code scheduling

    所以如果不重新排序，这里有一个**不可避免的延迟。**

#### 3. Control Harzards

