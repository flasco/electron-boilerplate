import React from 'react';
import { Input, Button } from 'zent';
import { Link } from 'react-router-dom';
import './index.scss';
import ico from '../../../../static/app.ico';

const { ipcRenderer } = require('electron');

class Home extends React.PureComponent {
  onOpenIpc = () => {
    ipcRenderer.send('CQHACK:ipc-init', 'hello');
  };

  onCloseIpc = () => {
    ipcRenderer.send('CQHACK:ipc-close', 'hello');
  };

  onTestIpc = () => {
    ipcRenderer.send('CQHACK:handshake', 'hello');
  };

  render() {
    return (
      <React.Fragment>
        <div className="test">hello electron!</div>
        <img src={ico} alt="test" />
        <Input />
        <Button onClick={this.onOpenIpc}>开启</Button>
        <Button onClick={this.onCloseIpc}>关闭</Button>
        <Button onClick={this.onTestIpc}>测试</Button>
        <Link to="/page2">
          <Button>测试</Button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Home;
