import App from '../components/App';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '../actions/Actions';

const mapStateToProps = state => ({
  recipes: state.recipeApp.recipes,
  show: state.toggle.show
});

const mapDispatchToProps = dispatch => bindActionCreators(creators, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

