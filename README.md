# Delete multiple repos at once

[![Source](https://img.shields.io/badge/Source-purple)](https://gist.github.com/alinefr/9cc54871d439ac96aff2)

## Description

Ported Python - to - JS script to delete multiply repos with one CLI command at once.

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

1. Add name of repos to '*todelete.txt*' one per line
2. Add to '*deleteRepos.js*' your [github token](https://github.com/settings/tokens) and user/organization name
3. Run in terminal:
```bash
make delete
```