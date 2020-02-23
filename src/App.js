import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table/table'

function App() {
  return (
    <div className="App">
        <Table
          colums={[
              {name: 'Age', tag : 'age'},
              {name: 'Name', tag : 'name'},
          ]}
          datas={[
              {age: '19', name: 'kdk' },
              {age: '18', name: 'ddk' },
          ]}
        />
    </div>
  );
}

export default App;
