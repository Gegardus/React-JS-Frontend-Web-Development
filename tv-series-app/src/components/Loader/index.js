import React from 'react'
import loaderSrc from '../../assets/loading.gif'

const Loader = props => (
    <div>
        <img 
        style={{width: 120}} 
        src={loaderSrc} 
        alt='load img' />
    </div>
)

export default Loader;