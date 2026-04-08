---
title: CS181 Artificial Intelligence
date: 2024-10-11 16:20:40
index_img: /img/courses/CS181/wallhaven-ex57ok_2560x1440.png
categories: [Courses, CS181]
tags: [CS181, Learning]
math: true
comment: 'waline'
excerpt: Notes of CS181
---
# 1. Search

A search problem consists of:

1. A state space
2. A successor function(with actions, costs)
3. A start state and a goal test

A `<b style="color: red;">`search space`</b>` keeps only the details needed for planning (abstraction).
![](/img/courses/CS181/state-space.png)

## DFS

![](/img/courses/CS181/DFS.png)

## BFS

![](/img/courses/CS181/BFS.png)

## UCS

Uniform Cost Search is {% label success @complete and optimal %}.

![](/img/courses/CS181/UCS.png)

{% note warning %}

1. Explores options in every “direction”
2. No information about goal location
   {% endnote %}

## Greedy

Expand a node that you think is closest to a goal state.

## A*

### Admissible Heuristics

A heuristic h is admissible (optimistic) if:

$$
0\leq h(n)\leq h^*(n)
$$

where $h^*(n)$ is the true cost to a nearest goal.

### Consistency

{% gi total 3 3 %}
![]()
![](/img/courses/CS181/consistency.png)
![]()
{% endgi %}

{% note success %}
Consistency implies admissibility
{% endnote %}

$$
\text{cost}(A \rightarrow C) + h( C) \geq h(A)
$$

## 2. CSP(Constraint satisfaction problems)

- Backtracking
- Backtracking with Forward Checking
- Ordering
  - Least Constraining Value(LCV)
    > - Given a choice of variable, choose the least constraining value
    > - I.e., the one that rules out the fewest values in the remaining variables
    > - Note that it may take some computation to determine this!  (E.g., rerunning filtering)
    >
  - Minimum remaining values (MRV)
    > - Choose the variable with the fewest legal left values in its domain
    > - Also called “most constrained variable”
    >

`<b>`{% label primary @Arc Consistency %}`</b>`
After enforcing arc consistency:

- Can have one solution left
- Can have multiple solutions left
- Can have no solutions left (and not know it)

## 3. Adversarial Search(Minimax)

- Time: $O(B^m)$
- Space: $O(bm)$

> Exactly the same as DFS.
> And $m$ represents the depth of the node tree.

`<b>`{% label primary @Depth-limited search %}`</b>`

- Resources limits

Replace terminal utilities with an evaluation function for non-terminal positions.

Evaluation Functions:
![](/img/courses/CS181/eva-func.png)

- Do not guarantee the optimal play.
- More depth makes a BIG difference.

### `<b></b>`  $\alpha$-$\beta$ Implementation

![Pseudocode](/img/courses/CS181/alpha-beta.png)
