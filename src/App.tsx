import { useEffect, useState } from "react";
import "./App.css";
import ForceGraph from "./components/graph/ForceGraph";
import axios from "axios";

function App() {
  const [initialNodesAndLinks, setInitialNodesAndLinks] = useState({});

  const getInitialNodesAndLinks = async () => {
    try {
      const res = await axios.post("https://tejailabs.in:8510/initial-data");
      if (res?.status == 200) {
        const data = res?.data?.data;
        setInitialNodesAndLinks(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getInitialNodesAndLinks();
  }, []);

  return <ForceGraph nodesAndRelationships={initialNodesAndLinks} />;
}

export default App;
