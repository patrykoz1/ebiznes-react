import {React,Component} from "react";

class Orders extends Component{
    constructor() {
        super();
        this.state={
            orders:[],
        }
    }

    async getOrdersRequest(url){
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

    async getOrders(){
        const url = "http://localhost:9000/";
        let response = await this.getOrdersRequest(url)
        let orders = [];
        response.map(ord => {
            let order = {
                id: ord.id,
                productId: ord.productId,
                costumerId:ord.costumerId,
            };
            orders.push(order);
        })
        this.setState({orders:orders})
    }

    render(){
        return "Orders"
    }

}
export default Orders;