import { convert } from 'html-to-text';
import type { ComponentProps, Component, SvelteComponent } from 'svelte';
import { render as renderServer } from 'svelte/server';

export const render = async <
  Comp extends SvelteComponent<any> | Component<any>,
  Props extends ComponentProps<Comp> = ComponentProps<Comp>,
>(
  component: Comp,
  props?: Props,
) => {
  const rendered = renderServer(component as any, {
    props,
  });

  const doctype =
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';

  const html = `${doctype}${rendered.body}`;

  const text = renderAsPlainText(rendered.body);

  return {
    html,
    text,
  };
};

const renderAsPlainText = (markup: string) => {
	return convert(markup, {
		selectors: [
			{ selector: 'img', format: 'skip' },
			{ selector: '#__svelte-email-preview', format: 'skip' }
		]
	});
};
