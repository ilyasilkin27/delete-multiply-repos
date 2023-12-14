install:
	npm ci

delete:
	node index.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
