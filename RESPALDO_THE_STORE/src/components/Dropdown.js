import React from 'react'

class Dropdown extends React.Component {

    onChange = event => {
        this.setState({ category: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.category)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <select onChange={this.onChange} className='mr-2'>
                        <option value='computadoras'>Computers</option>
                        <option value='video juegos'>Video Games</option>
                        <option value='ofertas&limit=20'>Offers of the week</option>
                    </select>
                    <button type="submit">Search!</button>
                </form>
            </div>
        )
    }
}
export default Dropdown;