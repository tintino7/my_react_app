import styles from './FilterProductTable.module.css'
import {useState} from 'react'

const data = [
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "legume", price: "$1", stocked: true, name: "peanut" },
    { category: "Fruits", price: "$1", stocked: false, name: "Mango" }
  ]


  export default function FilterProductTable(){
    const [searchText, setSearchText] = useState('')
    const [inStock, setInStock] = useState(false)

    return(
        <div>
            <SearchBar searchText={searchText} inStock={inStock} setSearchText={setSearchText} setInStock={setInStock}/>
            <ProductTable searchText={searchText} inStock={inStock}/>
        </div>
        
    )
  }


function SearchBar(props){
    return(
        <div className={styles.searchBar}>
            <input type="text" placeholder='Search' value={props.searchText} onChange={(e) => props.setSearchText(s => e.target.value) }/>
            <label ><input name='instock' type="checkbox" checked={props.inStock} onChange={(e) => props.setInStock(e.target.checked)}/>In Stock Only</label>
        </div>
    )
}




function ProductTable(props){
    return(
        <div className={styles.productTable}>
            <div className={styles.productTableHead}>
                <h3>
                    Name
                </h3>
                <h3>
                    Price
                </h3>
            </div>
            <div>
                <ProductInfo searchText={props.searchText} inStock={props.inStock}/>
            </div>
        </div>
    )
}




function ProductInfo(props){

    const searchText = props.searchText.toLowerCase()
    const inStock = props.inStock

    const rememberCategory = []

    const products = []

    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase().includes(searchText)){
            if(!rememberCategory.includes(data[i].category)){
                rememberCategory.push(data[i].category)
                products.push(data[i])
            }
            else{
                products.push(data[i])
            }
        }
    }
    


    function createElements(category, products){

        const elemets = []

        for(let i = 0; i < category.length; i++){
            if(inStock){
                elemets.push(<ProductCategory key={category[i]} category={category[i]}/>)
                const categoryProducts = products.map(product => (product.category === category[i] && product.stocked ) ? product : null)
                elemets.push(<ProductItems key={`${category[i]}child`} products={categoryProducts}/>)
            }
            else{
                elemets.push(<ProductCategory key={category[i]} category={category[i]}/>)
                const categoryProducts = products.map(product => product.category === category[i] ? product : null)
                elemets.push(<ProductItems key={`${category[i]}child`} products={categoryProducts}/>)
            }
            
        }
        
        return(elemets);
    }

    return(
        <div className={styles.productInfo}>
            {createElements(rememberCategory, products)}
        </div>
    )
}


function ProductCategory(props){
    return(
        <h3 className={styles.category}>
            {props.category}
        </h3>
    )
}

function ProductItems(props){
  
    return(
        <ul className={styles.productRow}>
            {props.products.map((product) => (
            
            product ? (
                <li key={product.name} style={{ color: product.stocked ? 'white' : 'red' }}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </li>
                ) : null
            ))}              
        </ul>
    )
}

