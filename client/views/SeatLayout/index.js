import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Legend from './Legend';
import { LegendWrapper } from './style';
import fetchData from './actionCreators';
import Header from '../../components/Header/Header';

class SeatLayout extends Component {
	constructor() {
		super();
		this.canvasRef = null;
		this.setCanvasRef = element => {
			this.canvasRef = element;
		};

		this.updateCanvas = this.updateCanvas.bind(this);
		this.handleCanvasClick = this.handleCanvasClick.bind(this);
		this.state = {
			bookedSeatImg: 'https://res.cloudinary.com/ddbxa4afa/image/upload/v1528543654/blubus/armchair_3.svg',
			availableSeatImg: 'https://res.cloudinary.com/ddbxa4afa/image/upload/v1528528337/blubus/armchair.svg'
		};
	}
	componentDidMount() {
		this.props.dispatch(fetchData());
		this.updateCanvas();
	}

	componentDidUpdate() {
		this.updateCanvas();
	}

	createImage(ctx, offsetX, offsetY, showBlockedImg) {
		const img = new Image();
		img.onload = function loadImage() {
			ctx.drawImage(img, offsetX + 0, offsetY + 0, 40, 40);
		};
		img.src = showBlockedImg ? this.state.bookedSeatImg : this.state.availableSeatImg;
	}

	updateCanvas() {
		const { items } = this.props.seatLayout;
		const ctx = this.canvasRef.getContext('2d');
		let offsetX = 30,
			offsetY = 20;
		items &&
			items.map(item => {
				offsetX = 0;
				item.map(row => {
					row.isAvailable && row.isGangWay === false && this.createImage(ctx, offsetX, offsetY, false);
					row.isAvailable === false &&
						row.isGangWay === false &&
						this.createImage(ctx, offsetX, offsetY, true);
					offsetX += 50;
					return false;
				});
				offsetY += 80;
				return false;
			});
	}

	handleCanvasClick(event) {
		this.props.history.push('/summary');
	}

	render() {
		return (
			<section>
				<Header />
				<article>
					<canvas
						style={{ marginLeft: '20px' }}
						ref={this.setCanvasRef}
						width={400}
						height={400}
						onClick={this.handleCanvasClick}
					/>
					<LegendWrapper>
						<Legend variant="booked">Booked Seat</Legend>
						<Legend variant="available">Available Seat</Legend>
					</LegendWrapper>
				</article>
			</section>
		);
	}
}

const mapStateToProps = state => ({ seatLayout: state.seatLayout });

SeatLayout.defaultProps = {
	seatLayout: {
		items: []
	}
};

SeatLayout.propTypes = {
	seatLayout: PropTypes.shape({
		items: PropTypes.array
	}),
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(withRouter(SeatLayout));
