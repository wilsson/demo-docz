import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    color: white;
    background-color: #4762ea;
    font-size: 14px;
    border-radius: 4px;
    padding: 8px 15px;
`;

export const Button = ({ children }) => (
    <StyledButton>
        {children}
    </StyledButton>
);

Button.propTypes = {
    /**
    * Description of prop "foo".
    */
    children: PropTypes.element
};