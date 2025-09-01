import { Variants } from "motion";

interface MotionOptions {
    delay: number;
}

export const fadeVariants = (options?: MotionOptions): Variants => {
    const { delay = 0 } = options ?? {};

    const transition = {
        delay,
        duration: 1,
        ease: "easeInOut",
    };

    return {
        normal: {
            opacity: 1,
            translateX: 0,
            translateY: 0,
            transition: {
                ...transition,
                ease: [0.43, 0.13, 0.23, 0.96], // Easing array representing "easeInOut"
            },
        },
        right: {
            opacity: 0,
            translateX: 150,
        },
        bottom: {
            opacity: 0,
            translateY: 150,
        },
        left: {
            opacity: 0,
            translateX: -150,
        },
    };
};

export const fadeInRight = (options?: MotionOptions) => {
    const variants = fadeVariants(options);

    return {
        variants,
        initial: "right",
        whileInView: "normal",
        viewport: { once: true },
    };
};

export const fadeInBottom = (options?: MotionOptions) => {
    const variants = fadeVariants(options);

    return {
        variants,
        initial: "bottom",
        whileInView: "normal",
        viewport: { once: true },
    };
};

export const fadeInLeft = (options?: MotionOptions) => {
    const variants = fadeVariants(options);

    return {
        variants,
        initial: "left",
        whileInView: "normal",
        viewport: { once: true },
    };
};