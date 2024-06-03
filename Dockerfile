FROM node:20.5.0
RUN apt-get update \ 
&& apt-get -y upgrade
# RUN apt install -y git

# WORKDIR /mini-shops-Project/mini-shop-frontv2

# EXPOSE 5173

# CMD ["npm","install","&&","npm","run","dev"]