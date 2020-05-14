import React from 'react'

class GifList extends React.Component{
    render(){

        console.log(this.props.data)
        return(
            <div>
                This is the GifList
                <ul>
                    {this.props.data.map(gif =>
                        <div>
                        <li>{gif.title}</li>
                        <img display="inline-grid" src={gif.images.preview_gif.url} height="190px" />
                        </div>
                        )}
                </ul>
            </div>
        )
    }
}


export default GifList