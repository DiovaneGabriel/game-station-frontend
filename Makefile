up:
	docker compose up -d

down:
	docker compose down

update:
	docker run -it -v ./:/app diovanegabriel/node:latest /bin/sh -c "npm i" && \
	docker container prune -f