import type { ReactNode } from "react";

export interface Project{
    title: string;
    description: string;
    link: string;
    linkDemo: string;
    tags: string; 
}

export interface Btn{
    text?: string;
    icon?: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}
