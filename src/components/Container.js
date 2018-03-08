import './App.css';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SortAlgorithms from './SortAlgorithms';

class Container extends React.Component {

    componentWillMount() {
        this.props.featchLists()
    }

    mapListUI(element, idx) {
        return (
            <div className="card darken-1" key={(++idx)}>
                <div className="card-content">
                    <span className="card-title">{ element.title }</span>
                    <p>{ element.body }</p>
                </div>
            </div>
        )
    }

    comparator(prevVal, nextVal, prev, next) {
        let withStart = !(next.title).startsWith(prevVal) && !(next.title).startsWith(nextVal) && (
            (prev.title).startsWith(prevVal) || (prev.title).startsWith(nextVal) || (prev.body).startsWith(prevVal) || (prev.body).startsWith(nextVal)
        );

        let withIncludes = !(next.title).includes(prevVal) && !(next.title).includes(nextVal) && !(next.body).includes(prevVal) && !(next.body).includes(nextVal) && (
            (prev.title).includes(prevVal) || (prev.title).includes(nextVal) || (prev.body).includes(prevVal) || (prev.body).includes(nextVal)
        );

        if (withStart || withIncludes) return -1;
        else return 0;
    }

    render() {
        return (
            <div>
                <SortAlgorithms
                    list={this.props.lists}
                    withMark
                    exceptMark={false} //  ['title'] === column(s) do not mark
                    mapListUI={/* rquired */ this.mapListUI.bind(this)}
                    comparator={this.comparator.bind(this)}
                />
            </div>
        )
    }
};

export default connect(state => ({

    lists: state.sort.lists,

}), actions)(Container);

