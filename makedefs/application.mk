.application-install-dependencies:
	@mkdir -p node_modules || true
	@$(call .docker-run,cli,'yarn --production=false')

.application-build:
	@$(call .docker-run,cli,'yarn build')

.application-watch:
	@$(call .docker-run,cli,'yarn watch')