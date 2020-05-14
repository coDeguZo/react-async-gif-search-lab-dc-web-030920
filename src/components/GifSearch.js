import React from "react"

export default class GifSearch extends React.Component {


    render() {
        return (
            <div className="gif-search">
                <input onChange={this.props.onChange} type='text' placeholder="Search ..." />
                <button onClick={this.props.clickButton}>Click Me!</button>
            </div>
        )
    }
}