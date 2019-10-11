import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let skiData = {
    total:50,
    powder: 20,
    backcountry: 10,
    goal:100
}


class SkiDayCounter extends Component{
    render (){
        return (
            <section>
                <div>
                    <p> Total Days: {this.props.total}</p>
                </div>
                <div>
                    <p> Powder Days: {this.props.powder}</p>
                </div>
                <div>
                    <p> Backcountry Days : {this.props.backcountry}</p>
                </div>
                <div>
                    <p> Goal: {this.props.goal}</p>
                </div>
            </section>
            
        )
    }
}


ReactDOM.render(
    <SkiDayCounter
    total = {skiData.total}
    powder = {skiData.total}
    backcountry = {skiData.backcountry}
    goal = {skiData.goal}/>,
    document.getElementById('root'
    )
)

