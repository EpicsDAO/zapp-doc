---
id: what-is-zapp
title: Make software that is resistant to change
description: Software should be as resistant to change as possible, not only during new development, but also during production. Because the business needs to adapt to change. Every business has to make and operate software well to survive.
---

Software should be as resistant to change as possible, not only during new development, but also during production. Because the business needs to adapt to change. Every business has to make and operate software well to survive.

![Error risk](/imgs/doc/shark.jpg)

## The cost of change is high

The software industry as a whole has not focused on code maintainability, resulting in much more cost and effort spent on software maintenance than originally used for development.

If software is used, changes are inevitable and someone will actually change the code.

Adding features is one of the most common requests, but until recently, the industry didn't have a proper way to add features. The team that maintains the code is often not the team that originally developed the code, but for whatever reason the current design, even if the original developer was asked to extend it. Because it is difficult to remember if you are there.

Developers often spend more time reading than writing code. So if the change is large, you'll try to rewrite that part rather than spending time reading and understanding the current code. Many teams try to add the required functionality in their own way, rather than understanding the existing design. As a result, the quality of the entire system deteriorates, making further code expansion even more difficult.

Most software is not designed to handle enhancements well and requires redesign to add functionality, which is risky and costly.

As a result, developers may add existing code without touching it. The entangled nature of software makes it difficult to add functionality without a domino effect. New features create new bugs, and yet more. It's not uncommon for fixing it to create yet another bug that continues ...

## Bug fixes

Bugs are the main reason software development projects fail. The cost of fixing bugs is high. It increases development costs geometrically, stops projects, and ruins the system.

In fact, few software developers spend a lot of time fixing bugs. Some bugs are harmful and take a long time to fix, but many are trivial. Nonetheless, it's hard to find a bug if it's not a trivial problem.

As of 2013, MacOSX contained about 85 million lines of source code, which can be crashed with just one typo. There are many types of bugs. Bugs include everything from small things like typos that the compiler can't find to big things like design flaws in the entire system.

Bugs are often just the tip of the iceberg, where you'll be fixing multiple other bugs while fixing one. The structure of software is often intertwined, and fixing a single bug can lead to a whac-a-mole situation. Fixes that you thought would be fixed in a few minutes can be a wave of change that reaches the entire system.

In other words, the real problem to solve is "how can I make it easier to find bugs?"

## Make it small and write a unit test

Our answer is this.

"The test does not indicate that the bug does not exist, but that it does exist."

The test code is to check whether it works without affecting other functions when a new function is added, and if the test code does not exist, it is the same as "Products that have not been inspected are lined up in the sales floor". It will be in a state.

Just by not being aware of the error, there may be a lot of invisible errors behind it, and it is not possible to detect in advance what kind of error will occur and where.

Make the parts small, write a unit test for each part, and guarantee the operation. Since you can proceed while checking the operation, you can narrow the search range when an error occurs, and the speed of dealing with the error will increase. In addition, the domino effect, which causes a series of errors, can be suppressed as much as possible.

If you try to improve the quality later, it will cost many times more than creating the quality from the beginning. We are preparing unit tests that seem to be expensive at first glance, but the longer the operation, the more effective it will be, and since we can maintain a code base that can immediately respond to changes during the operation period, the final cost You can get sustainable business agility that was difficult until now while suppressing the cost.

ZAPP is designed to work as a whole if each operation is confirmed, and the necessary code is automatically generated at the time of Scaffold, so software can be built safely and quickly.
