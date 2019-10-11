import React, {Component} from 'react';
import {render} from 'react-dom';

let skiData = {
    total:50,
    powder: 20,
    backcountry: 10,
    goal:100
}


class SkiDayCounter extends Component{
    render (){
        const {total, powder , backcountry, goal}= this.props
        return (
            <section>
                <div>
                    <p> Total Days: {total}</p>
                </div>
                <div>
                    <p> Powder Days: {powder}</p>
                </div>
                <div>
                    <p> Backcountry Days : {backcountry}</p>
                </div>
                <div>
                    <p> Goal: {goal}</p>
                </div>
            </section>
            
        )
    }
}


render(
    <SkiDayCounter
    total = {skiData.total}
    powder = {skiData.total}
    backcountry = {skiData.backcountry}
    goal = {skiData.goal}/>,
    document.getElementById('root'
    )
)

