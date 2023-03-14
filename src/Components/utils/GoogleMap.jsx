import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    console.log(import.meta.env.VITE_MAP_API_KEY);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: `${import.meta.env.VITE_MAP_API_KEY}` }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};
const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default GoogleMap;
