import {React,Component} from "react";

class Shippings extends Component{
    constructor() {
        super();
        this.state={
            shippings:[],
        }
    }

    async getShippingsRequest(url){
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

    async getShippings(){
        const url = "http://localhost:9000/";
        let response = await this.getShippingsRequest(url)
        let shippings = [];
        response.map(ship => {
            let shipping = {
                id: ship.id,
                orderId: ship.orderId,
                typeOf:ship.typeOf,
            };
            shippings.push(shipping);
        })
        this.setState({shippings:shippings})
    }

    render(){
        return "Shippings"
    }

}
export default Shippings;