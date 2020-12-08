import React, { useEffect, useState } from "react";
import axios from "axios";
import { Message } from "@forte/shared";
import "./App.css";

const App = () => {
  const [a, setA] = useState("initial thing");

  useEffect(() => {
    axios("http://localhost:8080/").then((res) => {
      setA(res.data);
    });
  }, [a]);

  return <div>{a}</div>;
};

export default App;
