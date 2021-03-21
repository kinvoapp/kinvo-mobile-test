import React from 'react';
import {ReactNode} from 'react';
import {Center} from './styles';
interface IkinCenter {
  children: ReactNode;
}
export default function KinCenter({children}: IkinCenter): JSX.Element {
  return <Center>{children}</Center>;
}
