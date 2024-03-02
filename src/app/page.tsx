'use client';

import { Variants, motion } from 'framer-motion';

const variants: Variants = {
    hidden: {
        scale: 0,
        x: 100,
        y: -50,
    },
    show: {
        scale: 1,
        x: 0,
        y: 0
    }
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <motion.p transition={{bounce: 0.45, type: 'spring', duration: 0.7}} variants={variants} initial={'hidden'} animate={'show'} className="text-5xl font-bold text-blue-500">Bienvenidos a la pagina de dota 2</motion.p>
        </main>
    );
}
