import { connect } from 'react-redux'
import Weather from '../Weather'


const mapStateToProps = (state) =>{
    return {
       
        latitude : state.location.latitude,
        longitude : state.location.longitude,
        forecast: state.forecast, 
        city : state.city,
        temperature : state.temperature
    }
}


const mapDispatchToProps = (dispatch) =>{
    return { 
        weatherData : (data) => dispatch({type: "GET_WEATHER", forecast : data})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather)