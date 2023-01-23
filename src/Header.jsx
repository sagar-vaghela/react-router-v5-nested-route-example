import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const ref = useRef();

  // React.useLayoutEffect(() => {
  //   if (ref && ref.current) {
  //     ref.current.style = "background-color: #fa9a9a;";

  //     setTimeout(() => {
  //       ref.current.style = "background-color: none;";
  //     });
  //   }
  // });

  return (
    <header ref={ref}>
      <Link className="header-item" to="/">
        Home
      </Link>
      <Link className="header-item" to="/catalog">
        Catalog
      </Link>
    </header>
  );
}
