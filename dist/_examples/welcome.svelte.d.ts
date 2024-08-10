import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        firstName?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WelcomeProps = typeof __propDef.props;
export type WelcomeEvents = typeof __propDef.events;
export type WelcomeSlots = typeof __propDef.slots;
export default class Welcome extends SvelteComponent<WelcomeProps, WelcomeEvents, WelcomeSlots> {
}
export {};
