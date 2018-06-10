import React from 'react';
import uid from '../../utils/uid';

import { SearchResultsWrapper, ResultsList, ResultsListItem } from './style';

const ListItem = (props) => {
	const handleSelection = () => {
		props.handleSelection(props.data);
	};
	return <ResultsListItem onClick={handleSelection}>{props.children}</ResultsListItem>;
};

const SearchResults = (props) => {
	const handleSelection = (data) => {
		props.handleSelection(data);
	};

	const { result } = props;
	return (
		<SearchResultsWrapper>
			<ResultsList>
				{result &&
					result.map(item => (
						<ListItem data={item} key={uid()} handleSelection={handleSelection}>
							{item.city}
						</ListItem>
					))}
			</ResultsList>
		</SearchResultsWrapper>
	);
};

export default SearchResults;
