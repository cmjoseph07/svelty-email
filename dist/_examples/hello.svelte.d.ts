/** @typedef {typeof __propDef.props}  HelloProps */
/** @typedef {typeof __propDef.events}  HelloEvents */
/** @typedef {typeof __propDef.slots}  HelloSlots */
export default class Hello extends SvelteComponent<{
    name?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HelloProps = typeof __propDef.props;
export type HelloEvents = typeof __propDef.events;
export type HelloSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        name?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
