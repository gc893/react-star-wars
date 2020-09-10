import React from 'react'
import {getPilotDetail} from '../../services/sw-api'

class Pilot extends React.Component {
    state = {
        pilots: []
    }

    async componentDidMount() {
        const pilots = await getPilotDetail(this.props.pilotURL)
        this.setState({pilots})
    }

    render() {
    return ( <> <p>Pilot {this.props.idx + 1}: {this.state.pilots.name}</p> </> );
    }
}
 
export default Pilot;