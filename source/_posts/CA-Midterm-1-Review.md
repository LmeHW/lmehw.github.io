---
title: CA-Midterm_1-Review
date: 2024-04-12 12:47:02
lang: en
index_img: /img/CA-Midterm-1-Review/wallhaven-jxqgl5_2560x1440.jpg
tags: [CA, Learning]
categories: [课程学习,CA]
math: true
comment: 'waline'
excerpt: CS110 First Midterm Review
---
# Midterm_1 Review

<!-- vscode-markdown-toc -->
* 1. [Floating point number](#Floatingpointnumber)
* 2. [How C works?](#HowCworks)
	* 2.1. [C Compilation Simplified Overview](#CCompilationSimplifiedOverview)
	* 2.2. [Pointer](#Pointer)
	* 2.3. [Array](#Array)
		* 2.3.1. [Further explanations:](#Furtherexplanations:)
		* 2.3.2. [Point past end of array](#Pointpastendofarray)
* 3. [C Memory Managemen](#CMemoryManagemen)
	* 3.1. [Where are Variables Allocated?](#WhereareVariablesAllocated)
* 4. [RISC-V](#RISC-V)
* 5. [Combinatorial Logic](#CombinatorialLogic)
* 6. [Sequence Logic](#SequenceLogic)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# OverAll

<div align="center">
{% btn https://toast-lab.sist.shanghaitech.edu.cn/courses/CS110@ShanghaiTech/Spring-2024/index.html, Course page, CS110 Spring 2024 %}
</div>

##  1. <a name='Floatingpointnumber'></a>Floating point number

<div align="center">
<img src="/img/CA-Midterm-1-Review/1712645138443.png" style="max-height:250px; width:auto;">
</div>

$$
\begin{align}
    &S = (-1)^{\text{Sign}}\\\\
    &E = \text{Exponent}\_2-127_{10}\\\\
    &Value = S\times M\times2^E
  \end{align}
$$

<div align="center">
<img src="/img/CA-Midterm-1-Review/1712645707931.png" style="max-height:250px; width:auto;">
<figcaption>Summary</figcaption>
</div>

{% note warning %}
**Tips**:
Abt denorms: Normalization and hidden 1 is to blame!
The exponent of denorms: $E := -126$
{% endnote %}

##  2. <a name='HowCworks'></a>How C works?

###  2.1. <a name='CCompilationSimplifiedOverview'></a>C Compilation Simplified Overview

- Generally a two part process of compiling `.c` files to `.o` files, then linking the `.o` files into executables;
- Assembling is also done (but is hidden, i.e., done automatically, by default);

<div align="center">
<img src="/img/CA-Midterm-1-Review/1712647862392.png" style="max-height:450px; width:auto;">
</div>

**E.G**

<div align="center"">
<img src="/img/CA-Midterm-1-Review/1712657012853.png" style="max-height: 450px; width:auto;">
<figcaption>Something abt macro constant</figcaption>
</div>

{% note success %}
PI: no type.
{%endnote%}

###  2.2. <a name='Pointer'></a>Pointer

Just remember to initialize it, or it can point to "garbage".

###  2.3. <a name='Array'></a>Array

The difference between `char string1[] = "abc"` , `char string2[3] = "abc"  `and `char *string3 = "abc"`.

<div align="center">
    <img src="/img/CA-Midterm-1-Review/1712658756754.png" style="max-height:300px; width:auto;">
    <img src="/img/CA-Midterm-1-Review/1712658781716.png" style="max-height:300px; width:auto;">
    <p style="text-align:center;">string1 ends with '\0', string3 is only readable</p>
</div>

####  2.3.1. <a name='Furtherexplanations:'></a>Further explanations:

- **What do these below mean? Be really careful!**

  ```c
  int arr[] = [ 3,5,6,7,9] ; 
  int *p = arr;  
  int (*p1)[5] = &arr;  			// p is a pointer, including 5 int elements, refering to arr.
  int *p2[5];				// p2 is an array, including 5 int pointer.
  int (*p)(void);				// p is a pointer pointing to a function which accepts nothing.
  int (*func arr[5])(float x);      	// func_arr is an array, including 5 function pointers, and they all accept float.
  ```
- **Be carefull abt pointer in function**

  | `void inc_ptr(int *p) { p = p + 1; }` | `void inc_ptr(int **h){ *h = *h + 1; }` |
  | --------------------------------------- | ----------------------------------------- |
  | `int A[3] = {50, 60, 70};`            | `int A[3] = {50, 60, 70};`              |
  | `int *q = A;`                         | `int *q = A;`                           |
  | `inc_ptr( q);`                        | `inc_ptr(&q);`                          |
  | `printf( "q = %d\n",*q)`              | `printf( "q = %d\n",*q)`                |

{% note success %}

1. q = 50
2. q = 60
   {% endnote %}

####  2.3.2. <a name='Pointpastendofarray'></a>Point past end of array

- Array size n; want to access from 0 to n-1, but test for exit by comparing to address one element past the last member of the array.

```c
int ar[10]={},*p, *q, sum=0;
p = &ar[0]; q = &ar[10];
while (p!=q) /* sum = sum+*p; p = p+1*/ 
sum += *p++
```

- C defines that one element past **end of array must be a valid address**, i.e., <span style="font-weight: bold; color: red;"></span>not causing an error

##  3. <a name='CMemoryManagemen'></a>C Memory Managemen

<img align="right" src="/img/CA-Midterm-1-Review/1712563732459.png" style="max-height:200px; width:auto;">

- **Stack:** automatically resize itself upon function invocations. (StackOverflow)
- **Heap:** this part is used for dynamic memory allocation. (malloc, free)
- **Static Data:** Global and static variables, allocated in compile time.
- **Code:** Contains code of the program, immutable. Also called text segment.

###  3.1. <a name='WhereareVariablesAllocated'></a>Where are Variables Allocated?

- If declared outside a function, <span style="font-weight: bold; color: red;" >allocated in static storage</span>

- If declared inside function,<span style="font-weight: bold; color: red;"> allocated on the stack </span> and freed when function returns

  - `main()` is treated like a function
- For the above two types, the memory management is automatic

  - Don't need to deallocating when no longer using them
  - A variable does not exist anymore once a function ends!

##  4. <a name='RISC-V'></a>RISC-V

Seek for more details: [RISC-V Green_card](\img\CA-Midterm-1-Review\riscvcard.pdf)

##  5. <a name='CombinatorialLogic'></a>Combinatorial Logic

- Be careful:
  {% note danger %}
  $$
  \begin{equation}
    \begin{gathered}
      A = A + A\overline{D}\\\\
      \text{DeMorgan's Law: } \overline{AB} = \overline{A} + \overline{B}, \overline{A+B} =  \overline{A}\ \overline{B}
    \end{gathered}
  \end{equation}
  $$

{% endnote %}

##  6. <a name='SequenceLogic'></a>Sequence Logic

- Some terminology:
  - **Clk-to-q:** (t_prop) is the time for a signal to propagate through a flip-flop.
  - **Propagation delay:** (t_combinational) is the longest delay for any combinational logic (which by definition is surrounded by two flip-flop)
  - **Setup time:** (t_setup) is the time before the rising clock edge that the input to a flip-flop must be valid.
  - **Hold time:** The minimum time during which the input must be valid after the clock edge

<div align="center">
<img src="/img/CA-Midterm-1-Review/1712566491323.png" style="max-height:200px; width:auto;">
</div>

<div align="center">
    <img src="/img/CA-Midterm-1-Review/1712579855004.jpg" style="max-height:300px; width:auto;">
    <img src="/img/CA-Midterm-1-Review/1712580603850.png" style="max-height:300px; width:auto;">
</div>

{% note info %}
Therefore, to be more SPECIFIC:

**Clk-to-q:** when there is a rising edge, output propagate this time.
**Setup time & Hold time**, during which the input should be stable.
**Also note that:**
Combinatorial logic also has delays.
{% endnote %}
**(Setup time violation)** In a SDS, a system the clock period (or cycle time) must be at least as large as

$$
\begin{equation}
  \begin{gathered}
    t_{\text{prop}}(t_{\text{clk-to-q}})+t_{\text{combinational}}+t_{\text{setup}}\leq \text{min clock period}\\\\
    \text{Max frequency = 1/min clock period}
  \end{gathered}
\end{equation}
$$

(Hold time violation) In a feedback SDS(circuits contain register to register propagation), the hold time must not exceed:

$$
\text{hold time}\leq t_{\text{prop}}(t_{\text{clk-to-q}})+t_{\text{combinational}}
$$

**E.G**

<div align="center">
<img src="/img/CA-Midterm-1-Review/1712642904789.png" style="max-height:200px; width:auto;">
<figcaption>Example of Setup & Hold time</figcaption>
</div>

{% note success %}
Solution:

**Setup time**: the critical path of "outer" combinational circuit.
**Hold time**: The shortest path including self register.
**ATT:** Evaluate each register separately
{% endnote %}

<div align="center">
    <img src="/img/CA-Midterm-1-Review/1712643481109.jpg" style="max-height:200px; width:auto;">
    <img src="/img/CA-Midterm-1-Review/1712643484417.jpg" style="max-height:200px; width:auto;">
    <figcaption>Example of Setup & Hold time</figcaption>
</div>
