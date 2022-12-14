import React from 'react'

const Square = (props) => {
    return (
        <div className='square'>
            {console.log(props.squares, props.player)}
        </div>
    )
}

export default Square