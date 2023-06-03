import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCloudSun } from "react-icons/fa";

// containers
// import CounterFunction from "./container/CounterFunction";
// import CounterClass from "./container/CounterClass";
import WeatherGrid from "./container/WeatherGrid";
// import Form from "./container/Form";

// components
import WeatherCard from "./components/WeatherCard";

// 7ec648f2b6954dcdcc3cfc0c4563d1a0
function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data } = await axios("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7ec648f2b6954dcdcc3cfc0c4563d1a0");

    setData(data.list);
  }

  useEffect(() => {
    fetchData();
  }, []);
  // const [show, setShow] = useState(false);

  if (!data) {
    return "Loading .....";
  }

  return (
    <div className="App">
      {/* {
        show && <CounterClass/>
      }
      <button onClick={() => setShow(!show)}>Show</button>   */}


      {/* <Form/> */}
      <WeatherGrid>
        {
          data.map(item => (
            <WeatherCard
              title={item.weather[0].main}
              temperature={`${item.main.temp} °F`}
              icon={<FaCloudSun/>}
              color="red"
              fullWidth
            />
          ))
        }
      </WeatherGrid>
    </div>
  );
}

export default App;
