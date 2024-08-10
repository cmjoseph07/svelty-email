import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLDivElement> & {
        preview: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PreviewProps = typeof __propDef.props;
export type PreviewEvents = typeof __propDef.events;
export type PreviewSlots = typeof __propDef.slots;
export default class Preview extends SvelteComponent<PreviewProps, PreviewEvents, PreviewSlots> {
}
export {};
