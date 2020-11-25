import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { apiKey } from './../key/index';
class GoogleMaps extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={14}
				containerStyle={{
					width: '70%',
					height: '405px',
					borderRadius: '10px',
				}}
				initialCenter={{
					lat: 6.700071,
					lng: -1.630783,
				}}
			>
				<Marker onClick={this.onMarkerClick} name={'Current location'} />

				<InfoWindow onClose={this.onInfoWindowClose}>
					<div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: apiKey,
})(GoogleMaps);
