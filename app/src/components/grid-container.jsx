import { connect } from 'react-redux';

import Grid from './grid';
import { receiveGrid } from '../actions/grid-actions';

const mapStateToProps = state => ({
  grid: state.grid
});

export default connect(
  mapStateToProps
)(Grid);