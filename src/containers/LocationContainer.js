import { connect } from 'react-redux'
import Location from '../Location'


const mapStateToProps = (state) =>{
return {
    latitude : state.location.latitude,
    longitude : state.location.longitude
}

}


const mapDispatchToProps = (dispatch) => { 
    return{
        location: ( location )=> dispatch({type : "GET_LOCATION", location : location})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Location)