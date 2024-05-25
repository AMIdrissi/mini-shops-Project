#!/bin/bash
docker build -t mini-shop-front:v1 .
docker run --name mini-shop-front-v2 -d -it -p 5175:5173 --rm mini-shop-front:v1