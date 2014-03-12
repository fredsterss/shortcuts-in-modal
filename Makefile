
build: components lib/index.js lib/index.css lib/index.html
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean
