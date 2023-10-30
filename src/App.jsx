import { CardProduct } from "./User/DemyProducts";
import Home from "./User/Home";



const App = () => {
    const [products, setProducts] = useState(CardProduct);
    return(
        
        <Home/>
    )
}
export default App;