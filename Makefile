# Config
PROJECT := yuhu
DOCKER_ENV ?= dev

.PHONY: all
all:
	#    start                Start the application
	#    stop                 Stop the application
	#    restart              Restart the application
	#    build                Build the application including development environment
	#    clean                Cleans cache files, logs
	#    cleanall             Cleans containers, images and project files including caches, logs
	#    install              Install and build the application including development environment
	#    test                 Run application tests

# Includes
include makedefs/*.mk

# Targets
.PHONY: restart
restart: stop start

.PHONY: start
start:
	@$(call .docker-upd,web)
	@sleep 5
	# http://localhost:50080

.PHONY: start-attached
start-attached:
	@$(call .docker-up,web)

.PHONY: stop
stop:
	@docker-compose -p $(PROJECT) stop || true

.PHONY: shell
shell:
	@$(call .docker-run,cli,'bash',--service-ports)

.PHONY: clean
clean: .clean-project .clean-containers

.PHONY: cleanall
cleanall: .clean-project .clean-containers .clean-images

.PHONY: install
install: build .application-install-dependencies .application-build

.PHONY: build
build: .docker-build-images

.PHONY: test
test: .application-test
