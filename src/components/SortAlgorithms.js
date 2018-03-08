import './App.css';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class SortAlgorithms extends React.Component {

    constructor(props) {
        super(props)
        this.exceptMarkAssign = {}
        this.copyList = [];
        
        if (!(!!props.mapListUI) || !(typeof props.mapListUI === 'function')) throw TypeError('Method ' + 'mapListUI' + ' is rquired. of SortAlgorithms Class')
        if (!(!!props.comparator)) console.warn('you should create method comparator if you need start sort element(s).  of SortAlgorithms Class')
    }

    componentWillUpdate(nextProps) {
        if(!!nextProps.list && !!nextProps.list.length && !this.copyList.length )
            this.copyList = (nextProps.list);

        if(!!nextProps.exceptMark && Array.isArray(nextProps.exceptMark) && !!nextProps.exceptMark.length && !Object.keys(this.exceptMarkAssign).length) 
            nextProps.exceptMark.forEach((q) => this.exceptMarkAssign[q] = true)
        
    }

    onKeyUp(comparator , { target }) {

        if (!!this.props.list &&  Array.isArray(this.props.list) && this.props.list.length && target.value.trim().length) {
            let val = target.value.replace(/^\s+/,"").toLowerCase();
            let valUCF = val.charAt(0).toUpperCase() + val.substring(1)
            this.props.sortLists.apply(this, [this.props.list, (!!comparator && typeof comparator === 'function' ? comparator.bind(this, val, valUCF) : undefined)])
        } else {
            this.copyList && this.props.sortLists(this.copyList)
        }
    }

    mapListUI(element, i) {
        let assignElement = Object.assign({}, element);
        if(this.props.withMark) {
            for (let sub in assignElement) {
                assignElement[sub] = !!this.exceptMarkAssign[sub] ?  assignElement[sub] : this.withMark(assignElement[sub])
            }
        }
        return this.props.mapListUI(assignElement, i)
    }

    withMark(str) {
        let val = this.input.value;
        if (!!val && !!str && val.trim().length) {
            val = val.replace(/^\s+/,"").toLowerCase();

            function mark(char) {
                return '<span class="mark">' + char + '</span>';
            }
            str = ('' + str).replace(new RegExp(val, "gm"), mark)
            str = ('' + str).replace(new RegExp(val.charAt(0).toUpperCase() + val.substring(1), "gm"), mark)
        }
        if (str) return <span dangerouslySetInnerHTML = {{ __html: str.toString() }} />
        else return false;
    }



    renderLists() {
        return !!this.props.list && !!this.props.list.length ? this.props.list.map(this.mapListUI.bind(this)) :
            !!this.props.spinner ? this.props.spinner : (<div className="loading">Loading...</div>)
    }

  render() {
    return (
    <div>
      <div className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input ref={instance => (this.input = instance)} 
                id="textarea1" 
                className="materialize-textarea"
                placeholder="Search from content..." 
                onKeyUp={this.onKeyUp.bind(this, this.props.comparator)}
                autoFocus
            />

          </div>
        </div>
      </div>
      {this.renderLists()}
    </div>
    )
  }
};

export default connect(null, actions)(SortAlgorithms);

