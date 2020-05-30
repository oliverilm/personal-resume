import React from 'react';
import PortfolioBody from "./components/PortfolioBody";
import ParticlesBg from 'particles-bg'


function App() {
  return (
    <div className="App">
      <PortfolioBody />
      <ParticlesBg num={10}  scale={0.5} color={["#e74c3c","#f1c40f","#1abc9c", "#2ecc71", "#3498db"]}  type="circle" bg={true} />


    </div>
  );
}

export default App;
