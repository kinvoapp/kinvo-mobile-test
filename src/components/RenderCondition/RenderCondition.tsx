import React from 'react';

export type RenderConditionProps = {
  condition: boolean;
  children: React.ReactElement;
};

export const RenderCondition = ({
  condition = true,
  children,
}: RenderConditionProps) => (condition ? children : null);
