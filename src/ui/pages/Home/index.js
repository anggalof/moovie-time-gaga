import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMovieNowPlaying from '../../common/nowPlaying/actions';
import fetchNews from '../../common/news/actions';
import MovieSlider from '../../components/MovieSlider';
import News from '../../components/News';
import UserReviews from '../../components/UserReviews';
import PartnerStudios from '../../components/PartnerStudios';
import LoadingOverlay from '../../components/LoadingOverlay';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

    this.props.fetchMovieNowPlaying(1);
    this.props.fetchNews();
  }
  render() {
    const { nowPlaying, news } = this.props;
    return (
      <React.Fragment>
        {this.state.loading ? (
          <LoadingOverlay />
        ) : (
          <div className="wrapper-home">
            <div>
              <div className="container">NOW PLAYING</div>
              <MovieSlider data={nowPlaying.data} />
            </div>
            <div>
              <div className="container">MOVIE NEWS</div>
              <News data={news.data} />
            </div>
            <div>
              <div className="container">USER REVIEWS</div>
              <UserReviews />
            </div>
            <div>
              <div className="container">PARTNER STUDIOS</div>
              <PartnerStudios />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  nowPlaying: PropTypes.object,
  news: PropTypes.object,
};

const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying.items,
  news: state.news.items
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchMovieNowPlaying, fetchNews }, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
