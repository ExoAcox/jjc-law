import { Variants } from "motion";

interface MotionOptions {
    isInView?: boolean;
    delay?: number;
}

export const fadeVariants = (options?: MotionOptions): Variants => {
    const delay = options?.delay ?? 0

    const transition = {
        delay,
        duration: 1,
        ease: "easeInOut",
    };

    return {
        normal: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ...transition,
                ease: [0.43, 0.13, 0.23, 0.96], // Easing array representing "easeInOut"
            },
        },
        right: {
            opacity: 0,
            x: 150,
        },
        bottom: {
            opacity: 0,
            y: 150,
        },
        left: {
            opacity: 0,
            x: -150,
        },
    };
};

const parentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const parentAnimate = {
    variants: parentVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
};

export const fadeInRight = (options?: MotionOptions) => {
    const variants = fadeVariants(options);


    return {
        variants,
        initial: "right",
        whileInView: "normal",
        animate: options?.isInView ? "normal" : "",
        viewport: { once: true },
    };
};

export const fadeInBottom = (options?: MotionOptions) => {
    const variants = fadeVariants(options);


    return {
        variants,
        initial: "bottom",
        whileInView: "normal",
        animate: options?.isInView ? "normal" : "",
        viewport: { once: true },
    };
};

export const fadeInLeft = (options?: MotionOptions) => {
    const variants = fadeVariants(options);


    return {
        variants,
        initial: "left",
        whileInView: "normal",
        animate: options?.isInView ? "normal" : "",
        viewport: { once: true },
    };
};