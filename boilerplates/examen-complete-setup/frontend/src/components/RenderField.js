import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/constants';

const Error = styled.span`
    color: ${COLORS.danger};
`;

export const renderField = ({ input, label, type, meta: { touched, error, warning }, }) => (
    <div>
        <label>{label}</label>
        <div className="form-group">
            <input {...input} placeholder={label} type={type} className="form-control"/>
            {touched &&
            ((error && <Error>{error}</Error>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
);