import { SvelteComponent } from "svelte";
import type { StandardLonghandProperties, StandardProperties, StandardShorthandProperties } from 'csstype';
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: Omit<HTMLAttributes<HTMLParagraphElement>, "style"> & {
        style?: (StandardLonghandProperties<0 | (string & {}), string & {}> & StandardShorthandProperties<0 | (string & {}), string & {}> & StandardProperties<0 | (string & {}), string & {}>) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
export default class Text extends SvelteComponent<TextProps, TextEvents, TextSlots> {
}
export {};
