import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions'
import Header from '../components/Header';
import BrowseList from '../components/BrowseList';

class BrowseContainer extends React.Component {
    constructor(props) {
        super(props);
        this.items = [];
        this.totalItems = 0;
        this.offset = 0;
        this.limit = 12;
    }

    componentDidMount() {        
        loadData(this.props, this.offset, this.limit);
    }

    componentWillReceiveProps(nextProps) {
        this.items = nextProps.items;
        this.offset = nextProps.items.length - this.limit;
        this.totalItems = nextProps.totalItems;
    }

    loadMore() {
        const getItemsOffset = (offset, limit, totalItems) => totalItems > limit ? limit + offset : totalItems;
        const getItemsLimit = (showingItems, totalItems, limit) => showingItems + limit < totalItems ? limit : totalItems - showingItems;
        this.offset = getItemsOffset(this.offset, this.limit, this.totalItems);
        this.limit = getItemsLimit(this.items.length, this.totalItems, this.limit);
        this.props.actions.getItems(this.offset, this.limit);
    }

    render() {        
        return (
            <div>
                <Header title='Browse page' />
                <BrowseList
                    items={this.items}
                    totalItems={this.totalItems}
                    offset={this.offset}
                    limit={this.limit}
                    loadMore={this.loadMore.bind(this)}
                />
            </div>
        );
    }
}

const loadData = (props, offset, limit) => {
    props.actions.getItems(offset, limit);
};

const mapStateToProps = (state, ownProps) => state.app.items;

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);