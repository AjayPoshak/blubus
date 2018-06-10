import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import SearchResults from './SearchResults';
import { search } from '../../actions/homePage';
import TextInput from '../../components/TextInput';
import { MAX_ITEMS_IN_SEARCH_RESULTS } from '../../utils/constants';

class Search extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.resultItemSelection = this.resultItemSelection.bind(this);
		this.state = {
			value: '',
			showResults: false
		};
	}

	handleChange(value) {
		this.setState({ value });
		value.length === 0 ? this.setState({ showResults: false }) : this.setState({ showResults: true });
		this.props.dispatch(search(value));
	}

	resultItemSelection(data) {
		this.props.handleSearchResultSelection(data);
		this.setState({ value: data.city, showResults: false });
	}

	render() {
		const { result, icon, type, placeholder } = this.props,
			resultItems = result ? result.slice(0, MAX_ITEMS_IN_SEARCH_RESULTS) : '';

		return (
			<Fragment>
				<TextInput
					type={type}
					icon={icon}
					value={this.state.value}
					placeholder={placeholder}
					handleChange={this.handleChange}
				/>
				{this.state.showResults && (
					<SearchResults result={resultItems} handleSelection={this.resultItemSelection} />
				)}
			</Fragment>
		);
	}
}

Search.defaultProps = {
	result: [],
	type: 'text',
	placeholder: '',
	icon: 'http://res.cloudinary.com/ddbxa4afa/image/upload/v1527944418/blubus/location.svg'
};

Search.propTypes = {
	icon: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	result: PropTypes.arrayOf(PropTypes.any),
	handleSearchResultSelection: PropTypes.func.isRequired
};

export default Search;
