import React, { Component } from 'react'
//App class
class Appapi extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    // components added data
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                character: data,
                sales: ""
            })
        })
    }
    //render file
    render(){
        const text =this.state.loading ? "loading...." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default Appapi
