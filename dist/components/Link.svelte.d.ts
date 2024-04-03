import { SvelteComponent } from "svelte";
import type { StandardLonghandProperties, StandardProperties, StandardShorthandProperties } from 'csstype';
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: Omit<HTMLAttributes<HTMLAnchorElement>, "style"> & {
        style?: (StandardLonghandProperties<0 | (string & {}), string & {}> & StandardShorthandProperties<0 | (string & {}), string & {}> & StandardProperties<0 | (string & {}), string & {}>) | undefined;
        target?: string | undefined;
        href: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LinkProps = typeof __propDef.props;
export type LinkEvents = typeof __propDef.events;
export type LinkSlots = typeof __propDef.slots;
export default class Link extends SvelteComponent<LinkProps, LinkEvents, LinkSlots> {
}
export {};
