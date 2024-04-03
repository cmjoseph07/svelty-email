import { SvelteComponent } from "svelte";
import type { StandardLonghandProperties, StandardProperties, StandardShorthandProperties } from 'csstype';
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: Omit<HTMLAttributes<HTMLHRElement>, "style"> & {
        style?: (StandardLonghandProperties<0 | (string & {}), string & {}> & StandardProperties<0 | (string & {}), string & {}> & StandardShorthandProperties<0 | (string & {}), string & {}>) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HrProps = typeof __propDef.props;
export type HrEvents = typeof __propDef.events;
export type HrSlots = typeof __propDef.slots;
export default class Hr extends SvelteComponent<HrProps, HrEvents, HrSlots> {
}
export {};
