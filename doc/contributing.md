# Microfront architecture in docker

the docker-compose file in packages provide a full architecture in docker node container.

# Build the containers
`docker-compose build`

# Run the dockers
`docker-compose up -d`

# Faire l'installation des composants nécessaires
`docker-compose run --rm mfp-auth npm install`
`docker-compose run --rm mfp-marketing npm install`
`docker-compose run --rm mfp-dashboard npm install`
`docker-compose run --rm mfp-container npm install`

# Run the server 
`docker-compose exec mfp-marketing npm run start`

# Stop the dockers 
`docker-compose down`

# Add npm package
`docker-compose exec products-microfront-pwa npm install packageToInstall`