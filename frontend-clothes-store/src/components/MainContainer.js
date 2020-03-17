import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.css";
import MainPageImage from "./MainPageImage";
import ItemList from "./ItemList";
import SignUpPage from "./SignUpPage";
import NavBar from "./NavBar";
import API from "../API";
import Cart from "./Cart";
const cartUrl = "http://localhost:3000/carts";

class MainContainer extends React.Component {
  state = {
    items: [],
    itemsToBuy: [],
    username: null,
    userId: null,
    index: 0,
    searchTerm: "",
    filterBy: "All"
  };

  login = data => {
    this.setState({
      username: data.customer_username,
      userId: data.customer_id
    });
    localStorage.token = data.token;
    this.getCart();
  };

  signOut = () => {
    // this.props.history.push('/')
    this.setState({ username: null, userID: null, itemsToBuy: [] });
    localStorage.removeItem("token");
  };

  addToCart = item => {
    API.post(cartUrl, {
      cart: {
        customer_id: this.state.userId,
        item_id: item.id,
        item_name: item.name
      }
    }).then(data => this.updateItemsToBuy(data));
    alert("Added to cart!")
  };

  payForItems = () => {
    this.state.itemsToBuy.forEach(item => (this.deleteCartItem(item[1].id, item[0].id)))
    alert("Purchased!")
    this.cartEmpty()
  }

  cartEmpty = () => {
    this.setState({
      itemsToBuy: []
    })
  }

  updateSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  updateFilter = event => {
    this.setState({ filterBy: event.target.value });
  };

  searchbarFilterItems = () => {
    return this.state.items.filter(item =>
      item.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  dropdownFilterItems = items => {
    return this.state.filterBy === "All"
      ? items
      : items.filter(item => item.gender === this.state.filterBy);
  };

  deleteCartItem = (id, itemId) => {
    API.destroy("http://localhost:3000/carts", id).then(
      this.setState({
        itemsToBuy: [...this.state.itemsToBuy].filter(
          item => item[0].id !== itemId
        )
      })
    );
    // alert("Item deleted from cart!");
  };

  componentDidMount() {
    // if (this.props.username === null) {
    //   this.props.history.push('/')
    // } else
    if (localStorage.token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error);
          this.login(data);
          // this.props.history.push('/')
        })
        .catch(error => alert(error));
    }

    fetch("http://localhost:3000/items")
      .then(resp => resp.json())
      .then(items => this.setState({ items }));
  }

  getCart = () => {
    API.fetchusercart().then(data =>
      this.setState({
        itemsToBuy: data
      })
    );
  };

  updateItemsToBuy(item) {
    this.setState({
      itemsToBuy: [...this.state.itemsToBuy, item]
    });
  }

  renderMore = () => {
    const searchbarFilteredItems = this.searchbarFilterItems();
    const searchbarAndDropdownFiltered = this.dropdownFilterItems(
      searchbarFilteredItems
    );
    this.state.index >= searchbarAndDropdownFiltered.length - 8
      ? this.setState({
          index: 0
        })
      : this.setState({
          index: this.state.index + 10
        });
  };

  render() {
    const searchbarFilteredItems = this.searchbarFilterItems();
    const searchbarAndDropdownFiltered = this.dropdownFilterItems(
      searchbarFilteredItems
    );
    const { username, itemsToBuy, index, filterBy, searchTerm } = this.state; //took items away as not nec
    const {
      signOut,
      login,
      addToCart,
      renderMore,
      updateFilter,
      updateSearchTerm,
      updateItemsToBuy,
      deleteCartItem,
      payForItems
    } = this;
    const renderEight = searchbarAndDropdownFiltered.slice(index, index + 8);
    return (
      <div>
        <BrowserRouter>
          <NavBar username={username} signOut={signOut} />
          <h1 className="title">The Clothes Store</h1>
          <div>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <MainPageImage {...props} />}
              />
              <Route
                exact
                path="/login"
                render={props => <SignUpPage {...props} login={login} />}
              />
              <Route
                exact
                path="/itemslist"
                render={props => (
                  <>
                    <div className="filterContainer">
                      <div className="filters">
                        <label>
                          Filter:
                          <select value={filterBy} onChange={updateFilter}>
                            <option>All</option>
                            <option>Mens</option>
                            <option>Womens</option>
                            <option>Kids</option>
                          </select>
                        </label>
                        <br></br>
                        Search:
                        <input
                          value={searchTerm}
                          onChange={updateSearchTerm}
                          placeholder="enter clothing type.."
                        />
                      </div>
                    </div>
                    <ItemList
                      {...props}
                      username={username}
                      items={renderEight}
                      addToCart={addToCart}
                      renderMore={renderMore}
                    />
                  </>
                )}
              />
              <Route
                exact
                path="/cart"
                render={props => (
                  <Cart
                    {...props}
                    itemsToBuy={itemsToBuy}
                    updateItemsToBuy={updateItemsToBuy}
                    deleteCartItem={deleteCartItem}
                    payForItems={payForItems}
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default MainContainer;
