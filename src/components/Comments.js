import {React,Component} from "react";

class Comments extends Component{
    constructor() {
        super();
        this.state={
            comments:[],
        }
    }

    async getCommentsRequest(url){
        let result = null;
        result = fetch(url,{
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
            },
            method:'GET',
        }).then(response=>{return response.json}).then(responseData=>{
            return responseData;
        })
        return result;
    }

    async getComments(){
        const url = "http://localhost:9000/";
        let response = await this.getCommentsRequest(url)
        let comments = [];
        response.map(inv => {
            let invoice = {
                id: inv.id,
                body: inv.body,
                costumerId:inv.costumerId,
                clientId:inv.clientId,
            };
            comments.push(invoice);
        })
        this.setState({comments:comments})
    }

    render(){
        return "Comments"
    }

}
export default Comments;