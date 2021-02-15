import React, { useCallback, useState } from 'react';

import { Container, Title } from './styles';

interface FilterItemProps {
  title: string;
  onPress?: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ title, onPress }) => {
  const [active, setActive] = useState(false);

  const handleButtonFocus = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <Container
      onPress={onPress}
      onPressIn={handleButtonFocus}
      isActive={active}
    >
      <Title isActive={active}>{title}</Title>
    </Container>
  );
};

export default FilterItem;
