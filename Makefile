run:
	bash ./build.sh

run_win:
	@echo building image and container...
    @call build.bat

start:
	@docker start mini-shop-prj

restart:
	@docker restart mini-shop-prj

stop:
	@docker stop mini-shop-prj

 