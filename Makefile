IMAGE_TAG=lemobs/organo-front:latest

#Instala docker de repositórios APT 
install: 
	-sudo apt-get install docker.io \
	&& sudo groupadd docker || true \
	&& sudo usermod -aG docker $(USER)

#Executa todos os passos necessários para desenvolvimento local
run : build  server-dev

# Constrói a imagem do Docker
build: 
	docker build -t $(IMAGE_TAG) .

# Executa um container com shell interativo para instalar funções novas e fixar problemas como permissões
shell: dependencies
	docker run -it --rm \
		--name organo-front-dev \
		--user 0 \
		\
		-v ${PWD}:/app \
		\
		$(IMAGE_TAG) bash

# Instala as dependências do node para desenvolvimento
npm-install:
	docker run -it --rm \
		--name organo-front-dev \
		\
		-v ${PWD}:/app \
		\
		$(IMAGE_TAG) npm install --prefer-offline 


# Executa servidor em modo de desenvolvimento
server-dev: 
	docker run -it --rm \
		--name organo-front \
		--network host \
		-v ${PWD}:/app \
		$(IMAGE_TAG) npm start
		

