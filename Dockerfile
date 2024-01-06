# Para instalar a imagem mais atualizada...
# FROM registry.ccarj.intraer/mirror/library/node:lts-alpine AS build
# Para instalar a imagem compativel com a versao de 'geracao' do app
# FROM node:16.15.1 AS build

FROM node:16.15.1 AS build

# Definicao do diretorio de trabalho
WORKDIR /usr/local/app

# Transferencia do codigo fonte para a imagem
COPY ./ /usr/local/app/

# Instalacao de todas as dependencias
RUN npm install

# Atribuicao de permissoes de execucao
USER node
COPY . .
COPY --chown=node:node . .

# Exposicao da porta 80
EXPOSE 80:80

# Execucao em ambiente de producao
ENV NODE_ENV=production
CMD [ "node", "./app.js" ]