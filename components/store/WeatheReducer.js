const INITIAL_STATE = {
    weatherList: [],
    selectedWeather:null
}
export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        case "weather_list":
            return {
                ...states,
                weatherList: action.payload
            }
        case "selected_weather":
            return {
                ...states,
                selectedWeather: action.payload
            }
        default:
            return states;
    }
}