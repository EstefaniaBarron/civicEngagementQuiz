import React from 'react';
import PropTypes from 'prop-types';

export function Question(props) {
    return(
        <h2 className="Question">{props.content}</h2>
    );
}

Question.propTypes= {
    content: PropTypes.string.isRequired
};

export default Question;

