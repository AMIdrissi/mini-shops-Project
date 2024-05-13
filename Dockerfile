FROM node:20.5.0
RUN apt-get update \ 
&& apt-get -y upgrade
RUN apt install -y git

RUN git clone --depth 1 https://github.com/AMIdrissi/mini-shops-Project.git

WORKDIR /mini-shops-Project/mini-shop-frontv2

RUN npm install

EXPOSE 5173

CMD ["npm","run","dev"]