import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';
import ShadowBox from './ShadowBox';

const actions = ['Purchase', 'Make offer'];
const getPrice = (price) => price ? price.amounts.USD : 'Price Upon Request';

const onActionClick = (name) => alert(`Action ${name} is currently unavailable.`);

const Item = (props) => {
    const creators = props.creators ? <StyledCreators>Creators: {props.creators}</StyledCreators> : null;
    return (
        <StyledItemWrapper>
            <StyledImageCol xs={12} sm={6} md={4}>
                <img src={props.image} alt={props.title} />
            </StyledImageCol>
            <StyledDetailsCol>
                <StyledDetailsBox>
                    <StyledTitle>{props.title}</StyledTitle>
                    <StyledPrice>{getPrice(props.price)}</StyledPrice>
                    <StyledMeasurements>
                        Measurements:<br />
                        {props.measurements.display}
                    </StyledMeasurements>
                    <StyledActionListRow>
                        {actions.map((action, index) =>
                            <StyledActionCol key={index} onClick={onActionClick.bind(this, action.toLocaleLowerCase())}>
                                {action}
                            </StyledActionCol>
                        )}
                    </StyledActionListRow>
                </StyledDetailsBox>
                <ShadowBox>
                    <p dangerouslySetInnerHTML={{__html: props.description}} />
                    {creators}
                </ShadowBox>
            </StyledDetailsCol>
        </StyledItemWrapper>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amounts: PropTypes.shape({
            EUR: PropTypes.string,
            GBP: PropTypes.string,
            USD: PropTypes.string
        })
    }),
    measurements: PropTypes.shape({
        display: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
    creators: PropTypes.string.isRequired
};

export default Item;

const StyledItemWrapper = styled(Row)`
    margin: 1rem;
`;

const StyledImageCol = Col.withComponent(ShadowBox).extend`
    position: relative;
    text-align: center;
    margin: 1rem;
`;

const StyledDetailsCol = styled(Col)`
    padding: 0;
    margin: 1rem;
`;

const StyledDetailsBox = styled(ShadowBox)`
    padding-bottom: 0;
    margin-bottom: 1rem;
`;

const StyledTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const StyledPrice = styled.p`
    font-size: 1.8rem;
    margin: 2rem 0;
`;

const StyledMeasurements = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #b3b3b3;
`;

const StyledActionListRow = styled(Row)`
    border-top: 1px solid rgba(0, 0, 0, .05);
`;

const StyledActionCol = Col.withComponent('a').extend`
    font-size: 1.2rem;
    padding: 1.5rem 1rem;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    &:not(:last-child) {
        border-right: 1px solid rgba(0, 0, 0, .05);
    }
`;

const StyledCreators = styled.div`
    font-size: 1.2rem;
    color: #b3b3b3;
    margin-top: 1.5rem;
`;