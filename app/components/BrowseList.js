import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'styled-components-flexboxgrid';
import BrowseItem from './BrowseItem';
import Button from './Button';

const onLoadMore = (action) => action();
const isLoadMoreButtonShown = (showingItems, totalItems) => showingItems < totalItems;

const BrowseList = (props) => {
    return (
        <StyledBrowseListWrapper>
            <Row>
                {props.items.map((item, index) =>
                    <StyledCol key={index}>
                        <BrowseItem
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            onClick={props.toggleLike}
                        />
                    </StyledCol>
                )}
            </Row>
            {isLoadMoreButtonShown(props.items.length, props.totalItems)
                ?
                <StyledShowMoreButton onClick={onLoadMore.bind(this, props.loadMore)}>
                    Load more
                </StyledShowMoreButton>
                :
                null
            }
        </StyledBrowseListWrapper>
    );
}

BrowseList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.shape({
            amounts: PropTypes.objectOf(PropTypes.string)
        })
    })).isRequired,
    totalItems: PropTypes.number.isRequired,
    loadMore: PropTypes.func.isRequired
};

export default BrowseList;

const StyledBrowseListWrapper = styled.div`
    margin: 0 1rem;
`;

const StyledCol = styled(Col)`
    margin: 1rem;
`;

const StyledShowMoreButton = styled(Button)`
    margin: 2rem auto;
`;