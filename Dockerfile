FROM node:21
WORKDIR /mini_shops_frontend
VOLUME /mini_shops_frontend
CMD ["npm","run","dev"]