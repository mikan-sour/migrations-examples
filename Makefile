env:
	cp .env.sample .env

up:
	docker compose --env-file ./.env up -d  postgres 

down:
	docker-compose down -v