import { connect } from 'react-redux';

import Grid from './grid';
import { toggleCell } from '../../actions/grid-actions';

const mapStateToProps = state => ({
  grid: state.grid
});

const mapDispatchToProps = dispatch => ({
  toggle: cell => dispatch(toggleCell(cell))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);