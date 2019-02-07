clean:
	rm -rf node_modules

install:
	npm install --pure-lockfile

tar:
	tar -zcvf release.tar.gz assets Dockerfile components layouts middleware pages plugins static store *.js package.json package-lock.json 301.json