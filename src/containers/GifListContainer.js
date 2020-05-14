import React from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"
export default class GifContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            gifs: [],
            search: ''
        }
    }

    onSearchBarChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            search: event.target.value
        })
    }

    // componentWillUpdate( query="dolphin") {
    //     let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=07BT2cKZzeUOHRRxRi4L4hGSJnYwpTlp&rating=g`
    //     fetch(url)
    //     .then(resp => resp.json())
    //     .then(gifs => {
    //         // console.log(data)
    //         this.setState({
    //             gifs: gifs.data
    //         })
    //     })
    // }

    fetchGifs = (query="dolphin") => {
        let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=07BT2cKZzeUOHRRxRi4L4hGSJnYwpTlp&rating=g`
        fetch(url)
        .then(resp => resp.json())
        .then(gifs => {
            // console.log(data)
            this.setState({
                gifs: gifs.data
            })
        })
    }

    render() {
        return (
            <div>
                This is the Gif List Container
                <GifSearch onChange={this.onSearchBarChange} clickButton={this.fetchGifs}/>
                <GifList data={this.state.gifs} />
            </div>
        )
    }
}