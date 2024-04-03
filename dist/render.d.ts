import pretty from 'pretty';
export declare const render: ({ template, props, options }: {
    template: (...args: unknown[]) => void;
    props?: Record<string, any> | undefined;
    options?: {
        plainText?: boolean | undefined;
        pretty?: boolean | undefined;
    } | undefined;
}) => string;
