import React from 'react';
import {Divider} from './styles';

interface IkinDivider {
  style?: object;
}
export default function KinDivider({
  style = {marginTop: 15, marginBottom: 10},
}: IkinDivider): JSX.Element {
  return <Divider style={style} />;
}
