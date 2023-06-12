import React, { useRef, useEffect } from "react";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    // if(footerRef.current) {
    //   footerRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    // }
  }, []);


  return (
    <footer ref={footerRef}>
      footer
    </footer>
  );
}

export default Footer;
