import React, { component } from "react";
import GoogleMaps from "simple-react-google-maps";

export default class Maps extends Component {
    render(){
        return(
            <div className="container">
                <GoogleMaps
                style={{height:"500px",width:"370px"}}
                zoom={100}
                center={{
                    lat:-34.6169921,
                    lng:-58.3842611,
                }}
                />
            </div>
        );
    }
}