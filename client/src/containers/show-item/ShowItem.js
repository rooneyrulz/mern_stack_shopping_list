import React, { Component } from 'react';
import { connect } from "react-redux";

import Footer from "../../components/layouts/Footer";
import { getItems, deleteItem } from "../../actions/shoppingListActions";
import "./ShowItem.css";

class ShowItem extends Component {

  componentDidMount() {
    this.props.getItems();
  };

  onHandleDelete = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    let { items } = this.props.shoppingList;
    let shoppingListItems = items.length ? (
      items.map(item => {
        return (
          <div className="col col-12" key={item._id}>
            <div className="card mb-4 border-danger">
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Item</strong>
                    <span className="float-right">{item.name}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Price</strong>
                    <span className="float-right">{item.price}</span>
                  </li>
                </ul>
              </div>
              <button type="button" className="btn card-close btn-danger d-block" onClick={this.onHandleDelete.bind(this, item._id)}>DELETE</button>
            </div>
          </div>
        );
      })
    ) : (
      <div className="col col-12">
        <div className="card text-center">
          <div className="card-body">
            <h4>No Items Found..</h4>
          </div>
        </div>
      </div>
    )
    
    return (
      <div>
        <div className="container my-5">
          <h1>Show Items</h1>
          <hr/>
          <div className="container mt-4">
            <div className="row">
              { shoppingListItems }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingList: state.shoppingListReducer
  };
};

export default connect(mapStateToProps, { getItems, deleteItem }) (ShowItem)