import { ReactElement } from "react";

export interface NavigationCardProps {
    logo: ReactElement;
    title: string;
    subtitle: string;
    newSection?: boolean;
    navigationHandler: (path: string) => void;
}
