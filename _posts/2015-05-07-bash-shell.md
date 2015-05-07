---
layout: post
title: Bash Shell
description: A collection of everything about bash shell
tags: [bash, shell, syntax, loop, script, for, while, input]
category: notes
permalink: notes/bash-shell
---

## Looping & skipping
**Objective**: To use loop to display only odd natural numbers from 1 to 99.

**Example output**

```
1
3
5
.
.
.
97
99  
```

**While loop**

```bash
#!/bin/bash
X=1
while [ $X -le 99 ]
do
    echo $X
    X=$((X+2))
done
```

**For loop**

```bash
#!/bin/bash
for i in {1..99..2}
do
    echo "$i"
done
```



## Recommended Resources
- A quick but useful tutorial for bash starters is [here](http://mildronize.github.io/articles/2015/05/06/a-quick-guide-to-writing-scripts-using-the-bash-shell/).
- Handling input is documented and explained quite well on [this page](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_08_02.html).
- Different ways in which for loops may be used are explained with [examples here](http://www.cyberciti.biz/faq/bash-for-loop/).

Inspiration from <https://www.hackerrank.com/challenges/bash-tutorials---looping-and-skipping>
