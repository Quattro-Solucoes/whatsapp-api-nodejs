git clone https://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:@github.com/Quattro-Solucoes/whatsapp-api-nodejs.git

github.com/Quattro-Solucoes/whatsapp-api-nodejs.git

docker rm -vf $(docker ps -aq)
docker rmi -f $(docker images -aq)
docker system prune -a --volumes

ON SERVER

git pull
pass: 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
docker compose up -d --build --force-recreate
