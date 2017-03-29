import { connect } from 'react-redux';

import Runner from './runner';
import { receiveGrid } from '../../actions/grid-actions';

const mapStateToProps = ({ grid, controls }) => ({
  grid,
  controls
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(receiveGrid(grid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Runner);