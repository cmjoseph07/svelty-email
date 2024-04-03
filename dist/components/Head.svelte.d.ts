import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLHeadElement>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HeadProps = typeof __propDef.props;
export type HeadEvents = typeof __propDef.events;
export type HeadSlots = typeof __propDef.slots;
export default class Head extends SvelteComponent<HeadProps, HeadEvents, HeadSlots> {
}
export {};
