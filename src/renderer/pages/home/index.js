import React from 'react';
import { Button } from 'zent';
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

  onJmpTst = () => {
    const { history } = this.props;
    history && history.push('/page2');
  };

  render() {
    return (
      <React.Fragment>
        <div className="test">hello electron!</div>
        <img src={ico} alt="test" />
        <Button onClick={this.onOpenIpc}>开启</Button>
        <Button onClick={this.onCloseIpc}>关闭</Button>
        <Button onClick={this.onTestIpc}>测试</Button>
        <Button onClick={this.onJmpTst}>4566</Button>
      </React.Fragment>
    );
  }
}

export default Home;
