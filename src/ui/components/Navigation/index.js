import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../../utils/formatter/image';
import fetchSearch from '../../common/search/actions';

class Navigation extends Component {
	constructor(props) {
    super(props);
    this.state = {
			isComponentMenuVisible: false,
			isComponentMenuSearch: false,
			openCategory: false,
			displayedSearch: [],
    }
	}
	_handleClickCategory = () => {
    const isComponentMenuVisible = !this.state.isComponentMenuVisible;
    this.setState({ isComponentMenuVisible });
	};
	_handleSearchAutoComplete = (event) => {
		let keyword = event.target.value;
		this.props.fetchSearch(keyword)
		.then((response) => {
			if (response) {
				this.setState({
					displayedSearch: response.data.results,
					isComponentMenuSearch: true
				});
			} else {
				const isComponentMenuSearch = !this.state.isComponentMenuSearch;
				this.setState({
					isComponentMenuSearch
				});
			}
		});
	};
	_handleCloseSearch = () => {
		this.setState({
			isComponentMenuSearch: false
		});
	};
	_renderSearchResult = () => {
		return (
			<div className="scroll">
				<ul className="search-wrapper">
					{this.state.displayedSearch.map((el) => {
						const movieTitle = el.original_title.replace(/[^A-Z0-9]+/ig, '-');
						return (
							<li className="search-list" key={el.id}>
								<Link className="link-direct" to={`/movie/view/${el.id}-${movieTitle}`} onClick={this._handleCloseSearch}>
									<img className="search-image" src={getImageUrl(el.poster_path, 'small')} alt="img"/>   
									<span className="search-item">{el.original_title}</span>
								</Link>
							</li>
						); 
					})}          
				</ul>
			</div>
		);
	};
	_renderCategoryList = () => {
		return (
			<div className="category-list">
				<ul className="category-menu">
					<li className="category-menu-items">
						<Link to="/">Action</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Horror</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Commedy</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Drama</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Romantic</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Colosal</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Thriler</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Adventure</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Fantasy</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Animation</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Family</Link>
					</li>
					<li className="category-menu-items">
						<Link to="/">Others</Link>
					</li>
				</ul>
			</div>
		);
	};
  render() {
		const { isComponentMenuSearch, isComponentMenuVisible } = this.state;
    return (
			<section>
				<Navbar className="navbar-menu" inverse collapseOnSelect fluid fixedTop>
					<div className="logo-wrapper">
						<Link className="link-logo-wrapper navbar-brand" to="/">
							<img className="logo" alt="logo" src={`${process.env.PUBLIC_URL}/img/logo.png`} />
						</Link>
					</div>
					<div className="holder">
						<input type="text" className="input-search" onChange={this._handleSearchAutoComplete}/>
					</div>
					<div className="toolbar">
						<div className="category-wrapper">
							<div className="categorybar" onClick={this._handleClickCategory}>
								Category
							</div>
							<div className="loginbar">
								Login
							</div>
							<div className="startedbar">
								<Button className="button-started">
									Get Started
								</Button>
							</div>
						</div>
					</div>
					<div className="clearfix" />
				</Navbar>
				{isComponentMenuVisible && this._renderCategoryList()}
				{isComponentMenuSearch && this._renderSearchResult()}
			</section>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search.items,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchSearch }, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
