import { SvelteComponent } from "svelte";
import type { StandardLonghandProperties, StandardProperties, StandardShorthandProperties } from 'csstype';
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: Omit<HTMLAttributes<HTMLImageElement>, "style"> & {
        style?: (StandardProperties<0 | (string & {}), string & {}> & StandardLonghandProperties<0 | (string & {}), string & {}> & StandardShorthandProperties<0 | (string & {}), string & {}>) | undefined;
        alt: string;
        src: string;
        width: string;
        height: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ImgProps = typeof __propDef.props;
export type ImgEvents = typeof __propDef.events;
export type ImgSlots = typeof __propDef.slots;
export default class Img extends SvelteComponent<ImgProps, ImgEvents, ImgSlots> {
}
export {};
