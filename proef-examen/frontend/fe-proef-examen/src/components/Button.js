import React from 'react';
import styled from 'styled-components';

export const Button = props => {
    return (
        <button className="btn btn-primary btn-block" {...props}>
            {props.children}
        </button>
    )
};