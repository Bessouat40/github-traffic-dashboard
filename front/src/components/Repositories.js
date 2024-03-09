import React, { useState, useEffect } from 'react';
import BarPlot from './Barplot';

const Repositories = () => {
  const [repositories, setRepositories] = useState({});

  useEffect(() => {
    const getRepositories = async () => {
      const response = await fetch('http://localhost:8000/getRepositories');
      const data = await response.json();
      setRepositories(data['repositories']);
    };
    getRepositories();
  }, []);

  return (
    <div>
      <p>
        <i>Count : Number of views for each repository</i>
      </p>
      <p>
        <i>Uniques : Number of unique visitors for each repository</i>
      </p>
      <BarPlot data={repositories} />
    </div>
  );
};

export default Repositories;
