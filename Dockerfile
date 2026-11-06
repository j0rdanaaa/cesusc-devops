
# Utiliza uma imagem oficial do Node.js
FROM node:22-slim

# Define a pasta de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala apenas as dependências de produção
RUN npm ci --omit=dev

# Copia os arquivos da aplicação
COPY src ./src

# Informa a porta utilizada pelo Express
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"]
