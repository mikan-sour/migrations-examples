env:
	cp .env.sample .env

up:
	docker compose --env-file ./.env up -d  postgres 

down:
	docker-compose down -v

python_venv:
	cd python && source bin/activate
python_venv_down:
	cd python && deactivate