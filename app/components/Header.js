import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const getBackButton = match => match ? <StyledLink to="/"><ArrowLeft /></StyledLink> : null;

const Header = (props) => {    
    let backButton;
    if (props.match) {        
        backButton = <StyledLink to="/"><ArrowLeft/></StyledLink>;
    }
    return (
        <div>
            {getBackButton(props.match)}
            <StyledHeading>{props.title}</StyledHeading>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    match: PropTypes.object
};

export default Header;

const StyledLink = styled(Link)`
    float: left;
    text-decoration: none;
    margin: 1.3rem 0 0 1.3rem;
`;

const StyledHeading = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #444444;
    background-color: #ffffff;
    text-align: center;
    margin: 0 0 1.2rem;
    padding: 2rem 0;
    border-bottom: 2px solid #eeeeee;
`;

const ArrowLeft = styled.span`
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border: .1rem solid #bea561;
    border-radius: 50%;
    margin-right: .8rem;
    &::after {
        content: '';
        display: inline-block;
        margin-top: .9rem;
        margin-left: 1.14rem;
        width: .8rem;
        height: .8rem;
        border-top: .3rem solid #bea561;
        border-right: .3rem solid #bea561;
        transform: rotate(-135deg);
    }
`;