#!bin/bash
docker build -t mini-shops .
docker run -p 5173:5173 --name mini-shop-prj -d -v ./front-end:/mini_shops_frontend mini-shops