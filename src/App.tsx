import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Menu defaultIndex={0}>
            <MenuItem>color link</MenuItem>
            <MenuItem>color link2</MenuItem>
            <MenuItem>color link3</MenuItem>
          </Menu>
        </div>
        <div>
          <Button>Hello</Button>
          <Button disabled>Hello</Button>
          <Button onClick={() => {alert('123')}}>Hello</Button>
        </div>
        <div>
          <Button btnType="primary">Hello</Button>
          <Button btnType="success">Hello</Button>
          <Button btnType="warning">Hello</Button>
          <Button btnType="danger">Hello</Button>
          <Button btnType="link" href="http://www.baidu.com" target="_blank">Hello</Button>
          <Button btnType="link" href="http://www.baidu.com" disabled>Hello</Button>
        </div>
        <div>
          <Button size="lg">Hello</Button>
          <Button>Hello</Button>
          <Button size="sm">Hello</Button>
        </div>
        <code>
          const a = 1
        </code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
