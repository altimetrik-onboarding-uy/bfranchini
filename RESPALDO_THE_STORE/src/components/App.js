import React from 'react'
import Dropdown from './Dropdown'
import Items from './Items'
import Cart from './Cart'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: [],
            cart: {
                item: [],
                quantity: ''
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.handleSubmit('computadoras')
    }
    
    itemDataCallback = itemData => {
        let addedToCart = this.state.cart.item
        addedToCart.push(itemData)
        /* this.setState({ item: addedToCart }) */
        this.setState(prevState => ({
            cart: {                   
                ...prevState.cart,    
                item: addedToCart      
            }
        }))
    /* console.log(this.state.cart.item.price)*/
       /*  console.log(this.state.cart)  */
    }

    selectQuantity = quantity => {
        this.setState(prevState => ({
            cart: {                   
                ...prevState.cart,    
                quantity: quantity     
            }
        }))   
    }

    handleSubmit(category) {
        const url = `https://api.mercadolibre.com/sites/MLU/search?q=${category}`; /* ?category= */
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ show: data.results }))
            .catch(e => console.log('error', e))
    }

    deleteItem = itemId => {
        const items = this.state.cart.item.filter(item => item.id !== itemId)
        /* this.setState({ items: items }) */
        this.setState(prevState => ({
            cart: {                   
                ...prevState.cart,    
                item: items       
            }
        }))
        console.log(this.state.cart.item)
    }

    render() {
        return (
            <div className='container'>
                <Dropdown onFormSubmit={this.handleSubmit} />
                <Items showProp={this.state.show} parentCallback={this.itemDataCallback} onQuantitySubmit={this.selectQuantity} />
                <Cart showItem={this.state.cart} deleteItem={this.deleteItem}/>
            </div>
        )
    }
}

export default App;