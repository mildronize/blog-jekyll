---
layout: post
title: Bash Shell
description: A collection of everything about bash shell
tags: [bash, shell, syntax, loop, for, while, input, tutorial, getting-started]
category: notes
permalink: notes/bash-shell/
toc: true
---

## Hello bash wolrd!

**A quick introduction to 'Echo'**:

`Echo` is a common output in most programming language, as `printf` in C, `print` in Python ,etc.

*For Example:*

```bash
echo "Hello bash wolrd!"
```

*The output is:*

```
Hello bash wolrd!
```

---

## Read input & output it

Simple *input* for bash using `read`, and *output* or print string into console using `echo`.

*For Example:*

```bash
read name
echo "Hi, $name"
```

If I enter 'mild', *the output is:*

```
Hi, mild
```

### Read more

- [Quite well handling input document]

---

## Looping
### Simple Looping
**Objective**: To use loop to display numbers from 1 to 20

*Example output*

```
1
2
3
.
.
.
19
20
```

**For loop**

```bash
#!/bin/bash
for i in {1..20}
do
    echo "$i"
done
```

**While loop**

```bash
#!/bin/bash
X=1
while [ $X -le 20 ]
do
    echo $X
    X=$((X+1))
done
```

### Looping & Skipping
**Objective**: To use loop to display only even natural numbers from 2 to 100.

*Example output*

```
2
4
6
.
.
.
98
100  
```

**For loop**

```bash
#!/bin/bash
for i in {2..100..2}
do
    echo "$i"
done
```

**While loop**

```bash
#!/bin/bash
X=2
while [ $X -le 100 ]
do
    echo $X
    X=$((X+2))
done
```

### Read more

- [Different ways of using for loops may be used]

---

## Recommended Resources

- [A quick tutorial for bash starters]
- [Different ways of using for loops may be used]
- [Quite well handling input document]

[A quick tutorial for bash starters]: http://www.panix.com/~elflord/unix/bash-tute.html
[Quite well handling input document]: http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_08_02.html
[Different ways of using for loops may be used]: http://www.cyberciti.biz/faq/bash-for-loop/

Inspiration from [Hackerrank](https://www.hackerrank.com):

- 07 May 2015 &raquo; [Let's Echo]
- 07 May 2015 &raquo; [Looping and Skipping]
- 08 May 2015 &raquo; [A Personalized Echo]

[Let's Echo]: https://www.hackerrank.com/challenges/bash-tutorials-lets-echo
[Looping and Skipping]: https://www.hackerrank.com/challenges/bash-tutorials---looping-and-skipping
[A Personalized Echo]: https://www.hackerrank.com/challenges/bash-tutorials---a-personalized-echo
