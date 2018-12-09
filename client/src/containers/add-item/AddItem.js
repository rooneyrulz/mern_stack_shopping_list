import React, { Component } from 'react';
import { connect } from "react-redux";

import Footer from "../../components/layouts/Footer";
import { addItem } from "../../actions/shoppingListActions";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  };

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    if (this.state.name !== "" && this.state.price !== "") {
      let newItem = {
        name: this.state.name,
        price: this.state.price
      };
      this.props.addItem(newItem);
      this.props.history.push('/show_item');
    } else {
      alert(`please fill out the field..!`);
    }
  };

  render() {
    return (
      <div>
        <div className="container my-5">
          <h1 className="">Add Item</h1>
          <hr/>
          <div className="row mt-5">
            <div className="col col-sm-12">
              <div className="card p-4">
                <div className="card-body">
                  <form onSubmit={this.onHandleSubmit.bind(this)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" name="name" className="form-control" placeholder="Item name.." onChange={this.onHandleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input id="price" type="text" name="price" className="form-control" placeholder="Item price.." onChange={this.onHandleChange.bind(this)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">ADD ITEM</button>
                  </form>
                </div>
              </div>
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

export default connect(mapStateToProps, { addItem }) (AddItem);
