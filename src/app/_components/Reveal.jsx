'use client';
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.2, 0.7, 0.2, 1];

function Reveal({ children, className = "", delay = 0, y = 48, as = "div", amount = 0.2 }) {
    const reduce = useReducedMotion();
    const Tag = motion[as];

    if (reduce) {
        return <Tag className={className}>{children}</Tag>;
    }

    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y, scale: 0.97, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.9, ease: EASE, delay }}
        >
            {children}
        </Tag>
    );
}

export default Reveal;
