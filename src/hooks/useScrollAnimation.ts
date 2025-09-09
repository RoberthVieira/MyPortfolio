import { useState, useEffect, type RefObject } from "react";

export default function useScrollAnimation(ref: RefObject<HTMLElement | null>) {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const elemento = ref.current;
        if (!elemento) return;

        const observer = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting) {
                    setVisivel(true);
                    observer.unobserve(entrada.target);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(elemento);

        return () => observer.disconnect();
    }, [ref]);

    return visivel
}

