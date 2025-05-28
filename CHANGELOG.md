# @cmjoseph07/svelty-email

## 0.1.0

- breaking: updates dep to Svelte 5 and updated `render.ts` to allow for Svelte 5 support

## 0.0.11

- fix: Head component `http-equiv` attribute typo

## 0.0.10

- fix: duplicate markdown produced from `Container.svelte` yank, removed duplicate code.

## 0.0.9

- fix: better error message for 'Preview' component range error. ([#14](https://github.com/carstenlebek/svelte-email/issues/14))
- fix: remove default bg of #ffffff from 'Container' component and TS error for class. ([#32](https://github.com/carstenlebek/svelte-email/issues/32))
- fix: warning -- CardGroup has unused export property 'cols'.

## 0.0.8

### Patch Changes

- fix: README.md to fix example and block quote warnings
- fix: Airbnb example to reflect "Section" not being used as root element
- fix: integration documentation pages incorrectly list the render function arguments with a "component" property, instead "template".

## 0.0.7

### Patch Changes

- fix: warning -- '...no exports condition for svelte.' by adding required export conditions to package.json. ([#29](https://github.com/carstenlebek/svelte-email/issues/29))
- fix: warning -- '...A11y: <td> cannot have role 'presentation'' by switching role to "row" ([#18](https://github.com/carstenlebek/svelte-email/issues/18))
