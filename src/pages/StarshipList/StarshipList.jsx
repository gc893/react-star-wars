import React, { Component } from 'react'
import {getStarships} from '../../services/sw-api'
import { Link } from 'react-router-dom'

class StarshipList extends Component {
    state = { 
        starships: []
     }

    async componentDidMount() {
        const starships = await getStarships()
        console.log(starships.results)
        this.setState({ starships: starships.results })
       }

    render() { 
        return ( 
            <>
                <div id='card-container'>
                    {this.state.starships.map((starship, idx)=>(
                        <div id='starship-card' key={idx}>
                            <Link
                                to={{
                                    pathname: '/spaceshipdetails',
                                    state: {starship}
                                }}
                            >
                            <h3>{starship.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
         );
    }
}
 
export default StarshipList;