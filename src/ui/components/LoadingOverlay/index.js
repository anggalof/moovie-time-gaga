import React from 'react';

export default class LoadingOverlay extends React.Component {
  render() {
    return (
      <div className="loading-overlay">
        <div className="loading">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
      </div>
    );
  }
}
