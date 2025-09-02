import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
    extend: {
        theme: {},
    },
});

export const tw = (...classNames: (string | boolean | undefined)[]) => {
    return customTwMerge(clsx(...classNames));
};

