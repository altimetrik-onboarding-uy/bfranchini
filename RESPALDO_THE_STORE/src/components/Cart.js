import React from 'react'

class Cart extends React.Component {

    cartItem() {
        let detailsItem = this.props.showItem.item
        let renderOneItem = detailsItem.map(one => {
            return (
                <div className='row' key={one.id}>
                    <div className='offset-1 col-10'>
                        <button type='button' className='btn btn-warning float-right' onClick={() => this.props.deleteItem(one.id)}>X</button>
                        <p>{one.title}</p>
                        <p>quantity: {this.props.showItem.quantity}</p>
                        <h6>price: {one.currency_id} {one.price * this.props.showItem.quantity}</h6>
                    </div>
                </div>
            )
        })
        /* console.log(this.props.showQuantity) */
        return renderOneItem
    }

    cartTotal() {
        let quantity = this.props.showItem.quantity
        let singularPrice = []
        let total = this.props.showItem.item
        let cartTotal = total.map(grandTotal => {
            singularPrice.push(grandTotal.price)
            let sum = singularPrice.reduce((a, b) => a + b)
            return sum * quantity
        })
        return cartTotal.slice(-1)
    }

    render() {
        const estilo = {
            width: '260px',
            position: 'fixed',
            right: '80px',
            top: '50px'
        }
        return (
            <div>
                <div className='col-3 float-right'>
                    <div className='border' style={estilo}>
                        <h6 className='text-center'>Cart</h6>
                        <hr></hr>
                        {this.cartItem()}
                        <hr></hr>
                        <h6 className='offset-1'>Total: {this.cartTotal()}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart