import React from "react";

const AboutUs = React.forwardRef(({ title }, ref) => {

  return (
    <section ref={ref}>
      { title }
    </section>
  );
});

export default AboutUs;
