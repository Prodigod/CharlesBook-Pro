import './styles.scss'; //
const MacOSWarningDialog = ({ message }) => {
  return (
    <div className="macos-warning-dialog-overlay">
      <div className="macos-warning-dialog">
        <div className="macos-warning-header">
          <span className="macos-warning-title">Warning</span>
          {/* <button className="macos-warning-close-button" onClick={onClose}>✕</button> */}
        </div>
        <div className="macos-warning-content">
          {message}
        </div>
      </div>
    </div>
  );
};

export default MacOSWarningDialog;