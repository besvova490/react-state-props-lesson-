import React, { useRef } from "react";

// components
import CounterComponent from "./container/CounterComponent";
import ReachInput from "./container/ReachInput";
import Footer from "./container/Footer";
import AboutUs from "./container/AboutUs";
import AuthForm from "./container/AuthForm";
import AuthFormHooks from "./container/AuthFormHooks";
import AuthFormHooksHookForms from "./container/AuthFormHooksHookForms";


function App() {
  const ref = useRef(null);

  console.log(ref);

  const handleScroll = () => {
    console.log(ref.current);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  }

  return (
    <div className="App">
      <CounterComponent/>
      <ReachInput/>
      <button onClick={handleScroll}>Scroll</button>
      <AuthForm/>
      <AuthFormHooks/>
      <AuthFormHooksHookForms/>
      <AboutUs ref={ref} title="About Us"/>
      <Footer/>
    </div>
  );
}

export default App;
