import { connect } from 'react-redux';

import Controls from './controls';
import {
  receiveControls,
  resetControls
} from '../../actions/control-actions';
import { cleanGrid } from '../../actions/grid-actions';
import { resetCount } from '../../actions/count-actions';

const mapStateToProps = ({ controls, frameCount }) => ({
  controls,
  frameCount
});

const mapDispatchToProps = dispatch => ({
  setControls: controls => dispatch(receiveControls(controls)),
  resetControls: () => dispatch(resetControls()),
  cleanGrid: () => dispatch(cleanGrid()),
  resetCount: () => dispatch(resetCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);