import { SvelteComponent } from "svelte";
import type { StandardLonghandProperties, StandardProperties, StandardShorthandProperties } from 'csstype';
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: Omit<HTMLAttributes<HTMLTableElement>, "style"> & {
        style?: (StandardLonghandProperties<0 | (string & {}), string & {}> & StandardProperties<0 | (string & {}), string & {}> & StandardShorthandProperties<0 | (string & {}), string & {}>) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SectionProps = typeof __propDef.props;
export type SectionEvents = typeof __propDef.events;
export type SectionSlots = typeof __propDef.slots;
export default class Section extends SvelteComponent<SectionProps, SectionEvents, SectionSlots> {
}
export {};
