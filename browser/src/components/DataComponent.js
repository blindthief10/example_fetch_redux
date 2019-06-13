import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFromExpress } from '../redux/redux.js';

class DataComponent extends Component {

  componentDidMount() {
    this.props.makeFetch();
  }

  render() {
    return <h2>{this.props.myHeading}</h2>;
  }
}

const mapStateToProps = state => {
  return {
    myHeading: state.messageToBeShown
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeFetch: () => dispatch(fetchFromExpress())
  }
}

export const DataContainer = connect(mapStateToProps, mapDispatchToProps)(DataComponent);
