import React from 'react';
import UserReviewItem from '../UserReviewItem';

class UserReviews extends React.Component {
  render() {
		let reviews = [
      {
        id: 'movie012121',
        title: 'Avengers : End Game',
        publisher: 'Edwards Colin',
        description: `This movie is fantastic. You guys must see it. don't forget to bring your all families to watch this amazing movie.`,
        rating: '9.5'
      },
      {
        id: 'movie516172',
        title: 'X-Men : Dark Phoenix',
        publisher: 'Santiago Bruno',
        description: `This movie is fantastic. You guys must see it. don't forget to bring your all families to watch this amazing movie.`,
        rating: '8.5'
      },
      {
        id: 'movie113221',
        title: 'Avengers : End Game',
        publisher: 'Edwards Colin',
        description: `This movie is fantastic. You guys must see it. don't forget to bring your all families to watch this amazing movie.`,
        rating: '9.5'
      }
    ];
    return (
      <React.Fragment>
        <div className="clearfix">
          {reviews.map((item) => {
            return (
              <div className="column" key={item.id}>
                <UserReviewItem
                  title={item.title}
                  description={item.description}
                  publisher={item.publisher}
                  rating={item.rating}
                />
              </div>
            );
          })}
        </div>
   		</React.Fragment>
    );
  }
}

export default UserReviews;
