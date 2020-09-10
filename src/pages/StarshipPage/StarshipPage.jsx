import React, {Component} from 'react'
import Pilot from '../../components/Pilots/Pilots'


class Starship extends Component{
    render() {
        const starship = this.props.location.state.starship;
        return (
            <div id='desc-container'>
                <div id='description-card'>
                    <a href="/">Return</a>
                    <h3>{starship.name}</h3>
                    <p>Cargo Capacity: {starship.cargo_capacity} lbs.</p>
                    <p>Passengers: {starship.passengers}.</p>
                    <h3>Pilots:</h3>
                    {starship.pilots.length > 0 ? 
                        starship.pilots.map((pilot, idx) => 
                            <div key={idx}> 
                                <Pilot pilotURL={pilot} idx={idx}/> 
                            </div>
                        )
                        : 
                        <> <p>No pilots!</p>
                         </>
                    }
                    </div>
                </div> 
        );
    }
}
 
export default Starship;
