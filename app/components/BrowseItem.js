import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';
import ShadowBox from './ShadowBox';

const getPrice = (price) => price ? price.amounts.USD : 'Price Upon Request';

const BrowseItem = (props) => {            
    return (
        <ShadowBox>
            <StyledItemContainer to={`/item/${props.id}`}>
                <img src={props.image} />
                <Row>
                    <StyledPrice>
                        {getPrice(props.price)}
                    </StyledPrice>
                </Row>
            </StyledItemContainer>
        </ShadowBox>
    );
};

BrowseItem.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amounts: PropTypes.objectOf(PropTypes.string)
    })
};

export default BrowseItem;

const StyledItemContainer = styled(Link)`
    display: block;
    color: #444444;
    text-decoration: none;
    text-align: center;
`;

const StyledPrice = styled(Col)`
    text-align: left;
`;