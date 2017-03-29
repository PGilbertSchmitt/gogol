import { connect } from 'react-redux';

import Controls from './controls';
import {
  receiveControls,
  resetControls
} from '../actions/control-actions';

const mapStateToProps = ({ controls }) => ({
  controls
});

const mapDispatchToProps = dispatch => ({
  update: controls => dispatch(receiveControls(controls)),
  reset: () => dispatch(resetControls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);