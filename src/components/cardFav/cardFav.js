import React from 'react'
import Result from '../Result/Result'
import PropTypes from 'prop-types';

function cardFav({result},props) {
    return (
        <div>
           {result.map(result => (
				<Result key={result.imdbID} {...result} result={result} favorites={props.favorites} />
			))}
        </div>
    )
}

export default cardFav
