import React from "react";
import { useSelector } from "react-redux";
import MapView from 'react-native-maps';
const WeatherDetail = (props) => {
    const selectedWeather = useSelector((state) => state.WeatherReducer.selectedWeather);
    return (
        <MapView
            initialRegion={{
                latitude: selectedWeather?selectedWeather.coord.lat:37.78825,
                longitude: selectedWeather?selectedWeather.coord.long:-122.4324                
            }}
        />
    )

}
export default WeatherDetail;