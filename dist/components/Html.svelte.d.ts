import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: Omit<HTMLAttributes<HTMLHtmlElement>, "style"> & {
        lang?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HtmlProps = typeof __propDef.props;
export type HtmlEvents = typeof __propDef.events;
export type HtmlSlots = typeof __propDef.slots;
export default class Html extends SvelteComponent<HtmlProps, HtmlEvents, HtmlSlots> {
}
export {};
