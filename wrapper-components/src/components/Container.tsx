//Generic types: They allow you to connect multiple types and have them work together.

//POLYMORPHIC COMPONENT

import {
  type ReactNode,
  type ElementType,
  ComponentPropsWithoutRef,
} from 'react';

//<T> is the placeholder for that incoming extra type information. T is as a type here but name is up to you.T should simply be that incoming component identifier.
type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';
  return (
    <Component className="container" {...props}>
      {children}
    </Component>
  );
}

//now with all those codes above, we are able to add onClick and type props in our button type component in App.tsx
