import React from 'react';
import PropTypes from 'prop-types';

import SnackbarWrapper from './style';

class Snackbar extends React.Component {
	timeOut = 0;

	state = {
		openSnackbar: false
	};

	componentDidMount() {
		const { autoHideDuration } = this.props;
		this.setState({
			openSnackbar: true
		});

		if (window && autoHideDuration) {
			this.timeOut = window.setTimeout(() => {
				this.setState({ openSnackbar: false });
			}, autoHideDuration);
		}
	}

	componentWillUnmount() {
		window && window.clearTimeout(this.timeOut);
	}

	render() {
		const { message, showCloseIcon, onCloseClick } = this.props;
		const { openSnackbar } = this.state;

		return (
			openSnackbar && (
				<SnackbarWrapper>
					<p>{message}</p>
					{showCloseIcon && (
						<span role="button" tabIndex="0" onClick={onCloseClick} onKeyPress={onCloseClick}>
							{'X'}
						</span>
					)}
				</SnackbarWrapper>
			)
		);
	}
}

Snackbar.defaultProps = {
	message: '',
	autoHideDuration: 0,
	showCloseIcon: false,
	onCloseClick: () => {}
};

Snackbar.propTypes = {
	message: PropTypes.string,
	onCloseClick: PropTypes.func,
	showCloseIcon: PropTypes.bool,
	autoHideDuration: PropTypes.number
};

export default Snackbar;
/**
 * <Snackbar
 *  open={this.state.open}
 *  autoHideDuration={6000}
 *  onClose={this.handleClose}
 *  message="Seems to have lost connection"
 * />
 */
