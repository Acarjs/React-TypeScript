import { FormEvent, type ComponentPropsWithoutRef, useRef } from 'react';

//FormProps here is essentially an alias for ComponentPropsWithoutRef<'input'> here, which gives us an object type,which contains all the props that are accepted by the form element.
type FormProps = ComponentPropsWithoutRef<'form'> & {
  //value: unknown because we don't know in advance what value will be.
  onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...otherProps }: FormProps) {
  const form = useRef<HTMLFormElement>(null);

  //FormEvent is a generic type. In this case we will use HTMLFormElement.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //with using FormData all the inputs should be included name=""
    const formData = new FormData(event.currentTarget);

    //we can pass formData to it and this will convert FormData object to a simpler object where we can then access data with data.name and so on...So that will be a data object which collects the data from form submit.
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      <div>{children}</div>
    </form>
  );
}
