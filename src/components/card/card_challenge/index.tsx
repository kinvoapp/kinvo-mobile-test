import React from 'react';
import {View} from 'react-native';
import KinTag from '../../tag';
import {BoxIcon, Card, Title, SubTitle, Content} from './styles';

export interface IkinChallenge extends Icard {
  Icon: React.FC;
}
export default function KinCardChallenge({
  Icon,
  title,
  subtitle,
  tag,
}: IkinChallenge): JSX.Element {
  return (
    <Card>
      <Content>
        <BoxIcon>
          <Icon />
        </BoxIcon>
        <View>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </View>
      </Content>
      {tag && <KinTag name="Novo" />}
    </Card>
  );
}
