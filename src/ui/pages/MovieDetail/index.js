import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMovieDetail from '../../common/movieDetail/actions';
import LoadingOverlay from '../../components/LoadingOverlay';
import UserReviews from '../../components/UserReviews';
import { formatSetDate } from '../../../utils/formatter/date';
import { getImageUrl } from '../../../utils/formatter/image';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    const { match } = this.props;

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

    this.props.fetchMovieDetail(match.params.id);
  }
  render() {
    const { movieDetail } = this.props;
    let data = movieDetail.data;
    return (
      <React.Fragment>
        {this.state.loading ? (
          <LoadingOverlay />
        ) : (
          <React.Fragment>
            <div className="movie-detail-wrapper">
              <div className="movie-detail-content-wrapper clearfix">
                <img className="movie-detail-image" src={getImageUrl(data.backdrop_path, 'original')} alt="icon" />
                <div className="movie-detail-content">
                  <div className="movie-detail-title">{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</div>
                  <div className="movie-detail-date">{formatSetDate(data.release_date)}</div>
                  <div className="movie-detail-description">{data.overview}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="container">USER REVIEWS</div>
              <UserReviews />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

MovieDetail.propTypes = {
  movieDetail: PropTypes.object,
};

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetail.items
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchMovieDetail }, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
