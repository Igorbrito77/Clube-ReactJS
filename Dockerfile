from node:16.17.0

# Add código-fonte
ADD . /app

# Troca contexto para /app
WORKDIR /app


# Setando versão do NPM
RUN set -x \
    && npm i npm@8.15.0

RUN npm install

#ENV TZ=America/Bahia

# Define script de execução padrão
#CMD [ "/app/entrypoint.sh" ]
