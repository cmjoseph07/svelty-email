import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        cols?: 3 | 4 | 2 | 1 | undefined;
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CardGroupProps = typeof __propDef.props;
export type CardGroupEvents = typeof __propDef.events;
export type CardGroupSlots = typeof __propDef.slots;
export default class CardGroup extends SvelteComponent<CardGroupProps, CardGroupEvents, CardGroupSlots> {
    get cols(): NonNullable<3 | 4 | 2 | 1 | undefined>;
}
export {};
