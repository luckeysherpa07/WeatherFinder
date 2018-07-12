import React from 'react';

class FormCompo extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.getWeather}>
                    <div class="row">
                        <input class="form-control" type="text" name="city" placeholder="City..." />
                    </div>
                    <div class="row">
                        <input class="form-control" type="text" name="country" placeholder="Country" />
                    </div>
                    <div class="row">
                        <button class="btn btn-dark btn-lg btn-block">Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormCompo;