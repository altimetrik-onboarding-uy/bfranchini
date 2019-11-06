import React from 'react'

class Items extends React.Component {

    onQuantitySubmit = event => {
        event.preventDefault()
        this.props.onQuantitySubmit(this.state.quantity)
    }

    onChangeQuantity = event => {
        this.setState({ quantity: event.target.value })
    }

    sendItemData = item => {
        this.props.parentCallback(item)
    }

    renderItem() {
        let show = this.props.showProp
        let renderOneItem = show.map(showList => {
            const style = {
                height: '320px'
            }
            return (
                <ul key={showList.id} className='col-9'>
                    <li className='col-3 card float-left m-1 p-2' style={style}><img src={showList.thumbnail}
                        className='img-fluid w-50 mx-auto' alt='' />{showList.title}<br></br><strong>price: {showList.currency_id} {showList.price}</strong>
                        <form className='mt-3' onSubmit={this.onQuantitySubmit}>
                            <label className='mb-4'>Quantity:</label>
                            <input onChange={this.onChangeQuantity} type="number" name="quantity" defaultValue='0' min='1' className='ml-3 w-50'></input>
                            <button type='submit' onClick={() => this.sendItemData(showList)} className="btn btn-success w-100">Add to cart</button>
                        </form>
                    </li>
                </ul>
            )
        })
        return renderOneItem
    }

    render() {
        return (
            <div>
                {this.renderItem()}
            </div>
        )
    }
}
export default Items;
