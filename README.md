[![Source](https://img.shields.io/badge/Source-purple)](https://gist.github.com/alinefr/9cc54871d439ac96aff2)
[![Rus](https://img.shields.io/badge/Rus-blue)](README_ru.md)

## Description

Ported and improved Python - to - JS script to delete multiply repos with one CLI command at once.

## Explanation

You need to generate your [github token](https://github.com/settings/tokens), and configure it by ticking '*repo*' and '*delete_repo*' boxes.  
Enter repository names as follows: ```test1,test2,test3```.

## Requirements

- npm
- nodejs
- Makefile

## Installation

1. Clone this repo
2. Run in terminal:
```bash
cd delete-multiply-repos && make install
```

## How to use

1. Run in terminal:
```bash
make delete
```