import { SvelteComponent } from "svelte";
import type { StandardLonghandProperties, StandardProperties, StandardShorthandProperties } from 'csstype';
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: Omit<HTMLAttributes<HTMLAnchorElement>, "style"> & {
        style?: (StandardProperties<0 | (string & {}), string & {}> & StandardLonghandProperties<0 | (string & {}), string & {}> & StandardShorthandProperties<0 | (string & {}), string & {}>) | undefined;
        href: string;
        target?: string | undefined;
        pX?: number | undefined;
        pY?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
