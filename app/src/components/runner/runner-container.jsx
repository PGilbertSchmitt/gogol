import { connect } from 'react-redux';

import Runner from './runner';
import { receiveGrid } from '../../actions/grid-actions';
import { stepCount } from '../../actions/count-actions';

const mapStateToProps = ({ grid, controls }) => ({
  grid,
  controls
});

const mapDispatchToProps = dispatch => ({
  updateGrid: grid => dispatch(receiveGrid(grid)),
  stepCount: () => dispatch(stepCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Runner);