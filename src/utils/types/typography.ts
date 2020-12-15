import {StyleProp, TextStyle} from 'react-native';

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'flat';

export type TypographyVariants =
  | 'largeTitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'headline'
  | 'body'
  | 'subhead'
  | 'footnote'
  | 'caption1'
  | 'caption2';

export type LoadingVariants = 'linear' | 'circular' | 'button';
export interface TypographyType {
  variant?: TypographyVariants;
  children?: string | string[] | any;
  style?: StyleProp<TextStyle>;
  textRef?: any;
  id?: string;
  accessibility?: string;
}
