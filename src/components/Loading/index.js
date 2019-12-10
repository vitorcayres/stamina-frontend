import React from 'react'
import Loading from 'react-fullscreen-loading'

export default (props) => {
    return (
        <Loading loading={props.status} background="rgba(0,0,0,.7)" loaderColor="#f23a2e" />
    )
}