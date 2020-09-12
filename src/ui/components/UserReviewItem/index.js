import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserReviewItem extends React.Component {
  render() {
    const { title, publisher, description } = this.props;
    return (
      <Link className="review-item-wrapper" to={`/`}>
				<div className="review-content">
					<div className="review-title">{title.charAt(0).toUpperCase() + title.slice(1)}</div>
					<div className="review-publisher">{publisher}</div>
					<div className="review-description">"{description}"</div>
				</div>
			</Link>
    );
  }
}

UserReviewItem.propTypes = {
  name: PropTypes.string,
};

export default UserReviewItem;
