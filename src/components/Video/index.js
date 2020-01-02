import React from 'react'
import ReactPlayer from 'react-player'

export default class Video extends React.Component {
    render() {
        return <ReactPlayer 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            playing={false} 
            width="100%"
            height={500}
            />
    }
}