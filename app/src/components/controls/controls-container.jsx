import { connect } from 'react-redux';

import Controls from './controls';
import {
  receiveControls,
  resetControls
} from '../../actions/control-actions';
import { cleanGrid } from '../../actions/grid-actions';

const mapStateToProps = ({ controls }) => ({
  controls
});

const mapDispatchToProps = dispatch => ({
  setControls: controls => dispatch(receiveControls(controls)),
  resetControls: () => dispatch(resetControls()),
  cleanGrid: () => dispatch(cleanGrid())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);