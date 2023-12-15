[![Source](https://img.shields.io/badge/Source-purple)](https://gist.github.com/alinefr/9cc54871d439ac96aff2)

## Описание

Портированный и улучшенный Python - to - JS скрипт для одновременного удаления нескольких репозиториев одной CLI командой.

## Пояснение

Вам нужно сгенерировать свой [github-токен](https://github.com/settings/tokens), и настроить его, отметив галочками '*repo*' и '*delete_repo*'.
Вы должны ввести имена репозиториев, разделенные запятыми без пробелов, следующим образом: ```test1,test2,test3```.

## Требования

- npm
- nodejs
- Makefile

## Установка

1. Склонируйте этот репозиторий
2. Запустите в терминале:
```bash
cd delete-multiply-repos && make install
```

## Как использовать

1. Запустите в терминале:
```bash
make delete
```