fmt:
	./node_modules/.bin/prettier --write \
		--trailing-comma all --no-semi --single-quote \
		*.js src/*.js src/**/*.js test/**/*.js

dist:
	./script/build-production

.PHONY: dist
