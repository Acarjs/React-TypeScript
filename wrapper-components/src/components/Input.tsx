//This is a WRAPPER COMPONENT
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>; //it is for gathering all remaining props above(...props). We merged all other props with InputProps. It must a generic type and in our case we need to enter 'input' type. Now we can use type="text" in the App.tsx component.

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </div>
  );
});

export default Input;

//...props collect all the remaning props of this object and store them in a new props object here : <input id={id} type="text" {...props} />. And then, spread all key:value properties on to this input.

//We use useRef when dealing with direct DOM interactions or when we need to store mutable values between renders. We use forwardRef when passing a ref (which is created with useRef on a parent component) down to a child component.
