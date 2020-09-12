import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatSetDate } from '../../../utils/formatter/date';

class NewsItem extends React.Component {
  render() {
    const { title, urlToImage, description, publishedAt } = this.props;
    return (
		<Link className="news-item-wrapper" to={`/`}>
			<div className="clearfix">
				<img className="icon-news-image" src={urlToImage} alt="icon" />
				<div className="news-content">
					<div className="news-title">{title.charAt(0).toUpperCase() + title.slice(1)}</div>
					<div className="news-date">{formatSetDate(publishedAt)}</div>
					<div className="news-description">{description}</div>
				</div>
			</div>
			<div className="readmore">
				Read More
			</div>
		</Link>
    );
  }
}

NewsItem.propTypes = {
  name: PropTypes.string,
};

export default NewsItem;
