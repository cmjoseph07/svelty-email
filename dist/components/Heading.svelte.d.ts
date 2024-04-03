import { SvelteComponent } from "svelte";
import type { StandardLonghandProperties, StandardProperties, StandardShorthandProperties } from 'csstype';
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: Omit<HTMLAttributes<HTMLHeadingElement>, "style"> & {
        style?: (StandardLonghandProperties<0 | (string & {}), string & {}> & StandardProperties<0 | (string & {}), string & {}> & StandardShorthandProperties<0 | (string & {}), string & {}>) | undefined;
        as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
        m?: string | undefined;
        mx?: string | undefined;
        my?: string | undefined;
        mt?: string | undefined;
        mr?: string | undefined;
        mb?: string | undefined;
        ml?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HeadingProps = typeof __propDef.props;
export type HeadingEvents = typeof __propDef.events;
export type HeadingSlots = typeof __propDef.slots;
export default class Heading extends SvelteComponent<HeadingProps, HeadingEvents, HeadingSlots> {
}
export {};
