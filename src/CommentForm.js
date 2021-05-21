import {React,Component} from 'react';

class CommentForm extends Component{
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
                <input id="body" name="body" type="text"/>
                <input id="costumerId" name="costumerId" type="text"/>
                <input id="clientId" name="clientId" type="text"/>

                <select>

                </select>
                <button>Add comment</button>

            </form>
        );
    }
}

export default CommentForm;