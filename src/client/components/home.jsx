import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {toggleCheck, incNumber, decNumber} from '../actions';

class Home extends React.Component {
  render() {
    const props = this.props;
    const {checked, value} = props;
    return (
      <div>
        <h1>Hello <a href={'https://github.com/electrode-io'}>{'Electrode'}</a></h1>
        <div>
          <h2>Managing States with Redux</h2>
          <label>
            <input onChange={props.onChangeCheck} type={'checkbox'} checked={checked}/>
            Checkbox
          </label>
          <div>
            <button type={'button'} onClick={props.onDecrease}>-</button>
            &nbsp;{value}&nbsp;
            <button type={'button'} onClick={props.onIncrease}>+</button>
          </div>
        </div>
        <ul>
          <li><Link to="/async">Go To Async Data Page!</Link></li>
          <li><Link to="/async/foo">Go To Async Data Page! (with param: foo)</Link></li>
        </ul>
        <ul>
          <li><Link to="/static">Go To Static Data Page!</Link></li>
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
