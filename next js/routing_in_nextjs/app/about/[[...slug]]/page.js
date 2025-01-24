import React from 'react'

const RandomComponent = ({ params: { slug } }) => {

    console.log(slug)
    return (
        <div>
            Hi i am the random Component {slug}
        </div>
    )
}

export default RandomComponent
