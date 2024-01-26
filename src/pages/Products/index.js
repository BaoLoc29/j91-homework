import { useNavigate } from "react-router-dom";
const Products = () => {
    const navigate = useNavigate();
    const PRODUCT = [{ id: '111', product: 'Iphone 11 promax' }, { id: '222', product: 'Iphone 13 promax' }, { id: '333', product: 'Iphone 12 promax' }]
    return (
        <div className="products">
            <h2>Products</h2>
            <ul>
                {PRODUCT.map(({ id, product }) => (
                    <li
                        key={id}
                        onClick={() => {
                            navigate(`/${id}`);
                        }}>
                        Product {product}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Products;