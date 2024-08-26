import React, { useState } from 'react';
import './Body.css'; // Ensure you have your CSS in this file

const SimulationViewer = () => {
  const [src, setSrc] = useState(''); // State to manage iframe source

  const handleNavClick = (fileName) => {
    setSrc(`/simulations/${fileName}.html`); // Update iframe source
  };

  return (
    <div className="simulation-viewer">
      <nav className="navbar-vertical">
        <button onClick={() => handleNavClick('fcfs')}>FCFS</button>
        <button onClick={() => handleNavClick('srtf')}>SRTF</button>
        <button onClick={() => handleNavClick('sjf')}>SJF</button>
        <button onClick={() => handleNavClick('priority-preemptive')}>Priority Preemptive</button>
        <button onClick={() => handleNavClick('priority-non-preemptive')}>Priority Non-Preemptive</button>
      </nav>
      {src && (
        <div className="content-area">
          <iframe src={src} title="CPU Scheduling Simulation" frameBorder="0" width="100%" height="600px"></iframe>
        </div>
      )}
    </div>
  );
};

export default SimulationViewer;
