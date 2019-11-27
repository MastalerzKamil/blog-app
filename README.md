# Requirements
- Docker
- Docker-compose
- Node

# How to run

## Docker
1. Go to root file
2. Use `docker-compose down -v --rmi all --remove-orphans` to run whole app. This command makes remove all images and all things after `docker-compose down`. Alternatively you can use just `docker compose up`.
3. Go to `localhost:3000`. (Check your docker machine ip, it can be different depends on your operating system)

## Local

### Frontend
1. Go to `/frontend` catalog
2. Run `npm start` to run application
3. Wait for compiling and check `localhost:3000` if app works