# Microfront architecture in docker

the docker-compose file in packages provide a full architecture in docker node container.

## Setting up
### Build the containers
`docker-compose build`

### Faire l'installation des composants nécessaires
`docker-compose run --rm mfp-auth npm install`
`docker-compose run --rm mfp-marketing npm install`
`docker-compose run --rm mfp-dashboard npm install`
`docker-compose run --rm mfp-container npm install`

## Working
### Run the dockers
`docker-compose up -d`
### Run the server 
`docker-compose exec mfp-marketing npm run start`
`docker-compose exec mfp-auth npm run start`
`docker-compose exec mfp-container npm run start`

### Testing build 
`docker-compose exec mfp-marketing npm run build`

### Stop the dockers 
`docker-compose down`

## Adding npm package
`docker-compose exec mfp-container npm install packageToInstall`