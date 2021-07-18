import {React,Component} from "react";

class Invoices extends Component{
    constructor() {
        super();
        this.state={
            invoices:[],
        }
    }

    async getInvoicesRequest(url){
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

    async getInvoices(){
        const url = "https://uj-ebiznes-back.azurewebsites.net/";
        let response = await this.getInvoicesRequest(url)
        let invoices = [];
        response.map(inv => {
            let invoice = {
                id: inv.id,
                orderId: inv.orderId,
                costumerId:inv.costumerId,
                typeOf:inv.typeOf,
            };
            invoices.push(invoice);
        })
        this.setState({invoices:invoices})
    }

    render(){
        return "Invoices"
    }

}
export default Invoices;