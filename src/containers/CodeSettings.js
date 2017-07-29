import { connect } from 'react-redux';
import CodeSettings from '../components/CodeSettings';
import { toggleLayout, setSource } from '../actions/app';
import { set } from '../actions/editor';
import { changeOutput } from '../actions/session';

const mapStateToProps = ({ editor, session, app }) => ({
  ...editor,
  source: app.source,
  output: session.output,
  vertical: app.vertical,
});

const CodeSettingsContainer = connect(mapStateToProps, {
  set,
  toggleLayout,
  setSource,
  changeOutput,
})(CodeSettings);

export default CodeSettingsContainer;
