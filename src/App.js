import React from 'react';
import './App.css';
import { Card, Table, LineGraph }  from './components'

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
        <Card width='500px' height='300px' margin='10px 10px 10px 10px'>
          
        </Card>
        <Card width='500px' height='300px' margin='10px 10px 10px 10px'>
          
        </Card>

    </div>
  );
}

export default App;
