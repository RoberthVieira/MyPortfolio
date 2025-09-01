import type { ReactNode } from "react";

export interface ProjectPropType{
    id: number;
    title: string;
    description: string;
    github: string;
    demo: string;
    img: string;
}

export interface Btn{
    text?: string;
    icon?: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}
