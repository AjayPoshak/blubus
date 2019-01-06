import React from 'react';
import Snackbar from './components/Snackbar';
/**
 * This class handles offline notification across the app
 */
class OfflineNotifier extends React.Component {
	state = {
		showSnackbar: false
	};

	componentDidMount() {
		/**
		 * Add listener to listen offline event
		 */
		window && window.addEventListener('offline', this.setOfflineState);
		/**
		 * Clear offline state when user comes online
		 */
		window && window.addEventListener('online', this.clearOfflineState);
	}

	componentWillUnmount() {
		window && window.removeEventListener('offline');
		window && window.removeEventListener('online');
	}

	setOfflineState = () => {
		this.setState({
			showSnackbar: true
		});
	};

	onCloseClick = () => {
		this.setState({
			showSnackbar: false
		});
	};

	clearOfflineState = () => {
		this.setState({
			showSnackbar: false
		});
	};

	render() {
		const { showSnackbar } = this.state;
		return (
			showSnackbar && (
				<Snackbar
					showCloseIcon
					autoHideDuration={8000}
					message="You are Offline"
					onCloseClick={this.onCloseClick}
				/>
			)
		);
	}
}

export default OfflineNotifier;
