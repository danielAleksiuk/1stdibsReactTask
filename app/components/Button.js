import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    display: block;
    font-size: 1.2rem;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 1.5rem 4rem;
    color: #bea561;
    border: 1px solid rgb(194, 179, 132);
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
`;
