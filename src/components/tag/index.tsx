import React from 'react';
import {TagContent, TagText} from './styles';

export default function KinTag(props: Itag): JSX.Element {
  return (
    <TagContent color={props.color}>
      <TagText>{props.name}</TagText>
    </TagContent>
  );
}
