import {React,Component} from 'react';

class InvoiceForm extends Component{
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
                <input id="orderId" name="orderId" type="text"/>
                <input id="costumerId" name="costumerId" type="text"/>
                <input id="typeOf" name="typeOf" type="text"/>
                <select>

                </select>
                <button>Add invoice</button>

            </form>
        );
    }
}

export default InvoiceForm;