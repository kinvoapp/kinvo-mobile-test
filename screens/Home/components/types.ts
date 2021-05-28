import { ReactElement } from "react";

export interface NavigationCardProps {
  logo: ReactElement;
  title: string;
  subtitle: string;
  navigationHandler: (path: string) => void;
}
