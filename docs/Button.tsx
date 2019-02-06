import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

interface Props {
    children?: React.ReactChildren;
    /** nombre del icono */
    icon?: string;
    /** icono de carga */
    loading?: boolean;
    /** tamaño del boton */
    size?: string;
    fullwidth?: boolean;
    onClick?: Function;
}

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    color: white;
    background-color: #4762ea;
    font-size: 14px;
    border-radius: 4px;
    padding: 8px 15px;
    ${(props) => props.fullwidth === true && `
        width: 100%;
    `}
    ${(props) => props.size === 'small' && ``}
    ${(props) => props.size === 'medium' && `
        font-size: 17px;
        padding: 19px 18px;
    `}
    ${(props) => props.size === 'large' && `
        font-size: 20px;
        padding: 16px 21px;
    `}
`;

export const Button: React.FC<Props> = ({ children, fullwidth, size }) => (
    <StyledButton fullwidth={fullwidth} size={size}>
        {children}
    </StyledButton>
);

Button.propTypes = {
    children: PropTypes.any,
    icon: PropTypes.string,
    loading: PropTypes.bool,
    size: PropTypes.string,
    fullwidth: PropTypes.bool
};