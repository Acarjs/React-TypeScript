import { type ReactNode } from 'react';

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
}

// ------------ALTERNATIVE SYNTAX--------------
// import { type ReactNode, type FC } from 'react';

// interface HeaderProps {
//   image: {
//     src: string;
//     alt: string;
//   };
//   children: ReactNode;
// }

// const Header: FC<HeaderProps> = ({ image, children }) => {
//   return (
//     <section>
//       {/* <img src={image.src} alt={image.alt} /> */}
//       <img {...image} />

//       {/* you can spread this way. This is a general REACT
//       shortcut which will simply take all key value pairs in an object and
//       spread them as props, as key value pairs. */}
//       {children}
//     </section>
//   );
// };

// export default Header;
