import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Search from '../components/Search'
import List from '../components/List'
import * as Actions from '../actions/Actions'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }
  setSearchValue(value) {
    this.setState({ searchValue: value });
  }
  render() {
    const { list } = this.props;
    const { search } = this.props.Actions;
    return <div>
      <Search listToSearch={ list } search={ search } setSearchValue={ ::this.setSearchValue } />
      <List filteredList={ list.filteredResult } searchValue={ this.state.searchValue } />
    </div>
  }
}
function mapStateToProps(state) {
  return {
    list: state.list
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
