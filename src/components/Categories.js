import {React,Component} from "react";

class Categories extends Component{
    constructor() {
        super();
        this.state={
            categories:[],
        }
    }

    async getCategoriesRequest(url){
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

    async getCategories(){
        const url = "http://localhost:9000/";
        let category = await this.getCategoriesRequest(url)
        let categories = [];
        category.map(inv => {
            let category = {
                id: inv.id,
                name:inv.name,
                description:inv.description,

            };
            categories.push(category);
        })
        this.setState({categories:categories})
    }

    render(){
        return "Purchases"
    }

}
export default Categories;