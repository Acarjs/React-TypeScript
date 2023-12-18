// import { useRef } from 'react';
import Input from './components/Input';
// import Button from './components/ButtonFirstApproach';
import Button from './components/Button.tsx';
// import Container from './components/Container.tsx';
import Form from './components/Form';

function App() {
  // const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    //as keyword allows us to convert the type TypeScript knows to a different type,if we know better than TypeScript what a type is.
    //here the type will be an object because Object.fromEntries will generate an object
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      {/* ---Input.tsx component--- */}
      {/* <Input label="Your name" id="name" type="text" ref={input} /> */}
      {/* <Input label="Your age" id="age" type="number" /> */}

      {/* ---ButtonFirstApproach.tsx component--- */}
      {/* <Button el="button">Button</Button>
      <Button el="anchor" href="https://google.com">
        Link
      </Button> */}

      {/* ---Button.tsx component--- */}
      {/* <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p> */}

      {/* <Container as={Button}>Click me!</Container> */}

      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;

//Values entered into input fields are always of type string when we extract them. Even if the input field had type number, that's just effecting how it will be presented. It's not affecting how the value is extracted.
