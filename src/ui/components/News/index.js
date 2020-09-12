import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import NewsItem from '../NewsItem';

class News extends React.Component {
  render() {
		const { data } = this.props;
    return (
      <React.Fragment>
        <Row className="row-wrapper">
          {data.articles.map((item) => {
            return (
              <Col md={6} xs={6} key={item.url}>
                <NewsItem
									title={item.title}
									urlToImage={item.urlToImage}
									description={item.description}
									publishedAt={item.publishedAt}
								/>
              </Col>
            );
          })}
        </Row>
   		</React.Fragment>
    );
  }
}

News.propTypes = {
  data: PropTypes.object,
};

export default News;
