import { ReactElement } from "react";

export interface Step {
    name: string;
    component: ReactElement;
    validate?: () => boolean;
}