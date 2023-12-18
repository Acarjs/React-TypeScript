import { type ComponentPropsWithoutRef } from 'react'; //This type ComponentPropsWithoutRef can be used to get hold of the default props that are accepted by one of the built-in(button,a..., etc) elements.

//This is a WRAPPER COMPONENT
type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>; //with using & ComponentPropsWithoutRef<'a'> we cannot use "href" property for button element.

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
  //const {el,...otherProps} =props; //TypeScript wouldn't understand that! It would give an error.

  if (props.el === 'anchor') {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
