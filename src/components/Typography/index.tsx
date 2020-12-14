import React, {FC} from 'react';
import {human} from '~/utils/modules';
import {TypographyType} from '~/utils/types';
import {Text} from './styles';

const Typography: FC<TypographyType> = ({
  style = [{}],
  variant = 'body',
  textRef = React.createRef(),
  children,
  id,
  accessibility,
  ...rest
}) => (
  <Text
    testID={id}
    accessibilityLabel={accessibility}
    ref={textRef}
    style={[human[variant], style]}
    {...rest}>
    {children}
  </Text>
);

export default Typography;
