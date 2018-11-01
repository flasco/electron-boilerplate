import React from 'react';
import { Button } from 'zent';
import { connect } from '../../utils/dva';
import { createAction } from '../../utils';
import './index.scss';
import ico from '../../../../static/app.ico';

// const { ipcRenderer } = require('electron');

class Page2 extends React.PureComponent {
  add = () => {
    const { dispatch } = this.props;
    dispatch && dispatch(createAction('app/testAdd')({}));
  };

  jmpHome = () => {
    const { history } = this.props;
    history && history.goBack();
  };

  render() {
    const { cnt = 0 } = this.props;
    return (
      <React.Fragment>
        <div className="test">hello page2!</div>
        <div className="test">{`cnt: ${cnt}`}</div>
        <img src={ico} alt="test" />
        <Button onClick={this.add}>happy~</Button>
        <Button onClick={this.jmpHome}>返回首页</Button>
      </React.Fragment>
    );
  }
}

function select(state) {
  console.log(state);
  if (state == null) return {};
  return {
    cnt: state.app.cnt
  };
}

export default connect(select)(Page2);
