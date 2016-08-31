import App from './App';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from './Actions';

const mapStateToProps = state => ({
  recipes: state.recipes
});

const mapDispatchToProps = dispatch => bindActionCreators(creators, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(App);

export default AppContainer;

