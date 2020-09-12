import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../../utils/formatter/image';
// import Rating from '../../Movies/Items/Rating';

class MovieItem extends React.Component {
  render() {
    const {
      title,
      movieId,
      posterPath,
    //   voteAverage,
    } = this.props;
    return (
      <Link className="item-wrapper" to={`/movie/view/${movieId}-${title}`}>
        <div className="item-content-wrapper">
          <img className="image-wrapper" src={getImageUrl(posterPath, 'original')} alt="poster" />
          <div className="detail-wrapper">
            <div className="title-text">{title}</div>
            {/* <Rating voteAverage={voteAverage} /> */}
          </div>
        </div>
      </Link>
    );
  }
}

MovieItem.propTypes = {
  title: PropTypes.string,
  movieId: PropTypes.number,
  posterPath: PropTypes.string,
  voteAverage: PropTypes.number,
};

export default MovieItem;
