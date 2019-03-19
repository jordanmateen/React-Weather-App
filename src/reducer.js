const initialState = {
    location : {
        latitude: 0,
        longitde: 0,
    },
    city: "",
    forecast: '',
    temperature: 0
}

const reducer = (state = initialState, action) =>{

    let { type , location, forecast } = action

    switch(type){
        case "GET_LOCATION" :
        return{
            ...state,
            location : location
        }

        case "GET_WEATHER" : 
        return {
            ...state,
            city: forecast.name,
            forecast : forecast.weather[0].description,
            temperature : Math.floor( (forecast.main.temp - 273.15) * (9/5) + 32 )
        }

        default:
        return {
            ...state
        }
    }
}

export default reducer;