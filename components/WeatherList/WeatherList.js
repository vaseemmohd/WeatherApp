import React, { useEffect } from "react";
import PushNotification from "react-native-push-notification";
import { useDispatch, useSelector } from "react-redux";
import { ENDPOINT } from "../utils/endpoint";
import { getOptions } from "../utils/httpConfig";
import request from "../utils/request";
const WeatherList = (props) => {
    const weatherList = useSelector((state) => state.WeatherReducer.weatherList);
    const dispatch = useDispatch();
    const loadCities = () => {
        let result = await request(
            `${ENDPOINT["GETCITIES"]}`,
            getOptions({})
        );
        dispatch({ type: "save_cities", payload: result.list })
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            message: "Current Weather "+result.list[0].main.temp, // (required)
            date: new Date(Date.now() + 60 * 1000), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
          });
    }
    useEffect(() => {
        loadCities();
    }, [])
    return (
        <>
            {
                weatherList && weatherList.map(w => (
                    <div onClick={() =>{dispatch({type:"selected_weather",payload:w});history.push("/WeatherDetail")}}>
                        <div>
                            <span>
                                {
                                    w.name
                                }
                            </span>
                            <span>
                                {
                                    w.wather[0].description
                                }
                            </span>


                        </div>
                        <div>
                            {w.main.temp}
                        </div>
                    </div>
                ))
            }
        </>
    )

}
export default WeatherList;