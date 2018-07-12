import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
                    {this.props.city && this.props.country &&
                    <h4 style={{color: "#EEF898"}}><b style={{color: "white"}}>Location:</b>
                        <div class="col" style={{paddingLeft: "60px"}}>{this.props.city}, {this.props.country}</div>
                        </h4>}
                </div>
                <div class="row">
                    {this.props.temperature && <h4 style={{color: "#EEF898"}}><b style={{color: "white"}}>Temperature:</b>
                        <div class="col" style={{paddingLeft: "60px"}}>{this.props.temperature}</div>
                        </h4>}
                </div>
                <div class="row">
                    {this.props.humidity && <h4 style={{color: "#EEF898"}}><b style={{color: "white"}}>Humidity:</b>
                        <div class="col" style={{paddingLeft: "60px"}}>{this.props.humidity}</div>
                        </h4>}
                </div>
                <div class="row">
                    {this.props.description && <h4 style={{color: "#EEF898"}}><b style={{color: "white"}}>Description:</b>
                        <div class="col" style={{paddingLeft: "60px"}}>{this.props.description}</div>
                        </h4>}
                </div>
                <div class="row">
                    {this.props.error && <h4 style={{color: "#EEF898"}}>{this.props.error}</h4>}
                </div>
            </div>

        )
    }
}

export default Weather;