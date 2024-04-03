import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href?: string | undefined;
        title: string;
        description?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
    };
};
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponent<CardProps, CardEvents, CardSlots> {
}
export {};
