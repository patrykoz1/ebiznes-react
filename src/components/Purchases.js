import {React,Component} from "react";

class Purchases extends Component{
    constructor() {
        super();
        this.state={
            purchases:[],
        }
    }

    async getPurchasesRequest(url){
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

    async getPurchases(){
        const url = "http://localhost:9000/";
        let response = await this.getPurchasesRequest(url)
        let purchases = [];
        response.map(inv => {
            let purchase = {
                id: inv.id,
                typeOf:inv.typeOf,
            };
            purchases.push(purchase);
        })
        this.setState({purchases:purchases})
    }

    render(){
        return "Purchases"
    }

}
export default Purchases;