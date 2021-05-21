import {React,Component} from 'react';

class ProductsForm extends Component{
    constructor() {
        super();
        this.postRequest = this.postRequest.bind(this);
    }

    postRequest(){
        const url = "http://localhost:9000/productadd";
        const data = new FormData(event.target);
        fetch(url,{
            method:"POST",
            body: data,
        })
    }

    render() {
        return(
            <form onSubmit={this.postRequest}>
                <input id="title" name="title" type="text"/>
                <input id="description" name="description" type="text"/>

                <select>

                </select>
                <button>Add product</button>

            </form>
        );
    }
}

export default ProductsForm;