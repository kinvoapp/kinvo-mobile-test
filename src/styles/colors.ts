const colors = {
  background: '#ECF0F2',
  primary: '#6F4DBF',
  secondary: '#36C4D6',
  text: '#627179',

  success: '#AED335',
  error: '#E85D1F',

  gray: '#818181',
  black: '#000000',
  white: '#FFFFFF',
};

type Keys = keyof typeof colors;

export type Color = typeof colors[Keys];

export default colors;
