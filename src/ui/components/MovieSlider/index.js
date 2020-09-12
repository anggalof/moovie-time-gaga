import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import MovieItem from '../MovieItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MovieSlider extends React.Component {
	_renderArrows = () => {
		return (
			<>
				<img className="arrow-icon-next" alt="next" src={`${process.env.PUBLIC_URL}/img/arrow-next.png`} onClick={() => this.slider.slickNext()} />
				<img className="arrow-icon-prev" alt="prev" src={`${process.env.PUBLIC_URL}/img/arrow-prev.png`} onClick={() => this.slider.slickPrev()} />
			</>
		);
	};
  render() {
    const { data } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 548,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 744,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1128,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ]
    };
    return (
			<React.Fragment>
				{this._renderArrows()}
				<Slider
					{...settings}
					ref={c => (this.slider = c)}
				>
					{data.results.map((item) => {
						return (
							<div className="movie-wrapper" key={item.id}>
								<MovieItem
									title={item.title}
									movieId={item.id}
									popularity={item.popularity}
									posterPath={item.poster_path}
									overview={item.overview}
									voteAverage={item.vote_average}
								/>
							</div>
						);
					})}
				</Slider>
			</React.Fragment>
    );
  }
}

MovieSlider.propTypes = {
  data: PropTypes.object,
};
export default MovieSlider;
