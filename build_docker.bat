@echo off
docker build -t mini-shops .
docker run -p 5174:5173 --name mini-shop-prj -d -v ./mini-shop-frontv2:/mini_shops_frontend mini-shops