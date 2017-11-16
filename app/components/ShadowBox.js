import React from 'react';
import styled from 'styled-components';

const ShadowBox = (props) => {
    return (
        <StyledShadowBox {...props}>
            {props.children}
        </StyledShadowBox>
    );
};

export default ShadowBox;

const StyledShadowBox = styled.div`
     background-color: #ffffff;
     padding: 1.2rem;
     box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
     border-radius: 4px;
 `;