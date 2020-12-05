import { ImageSourcePropType } from 'react-native';

export interface IHomeSection {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  route: string;
  label?: string;
}
