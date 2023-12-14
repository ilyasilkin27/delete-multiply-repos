# Delete multiple repos at once
(Source) [https://gist.github.com/alinefr/9cc54871d439ac96aff2]

## Description

Modified python script to delete multiple repositories at once

## Requirements

- python
- python-requests

## How to use

1. Add name of repos to *todelete.txt* one per line
2. Add to *delete_repos.py* your (github token) [https://github.com/settings/tokens] and user/organization name
2. run in terminal:
```bash
make delete
```