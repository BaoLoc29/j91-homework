import { useParams, useNavigate } from "react-router-dom";
const ProductDetail = () => {
    const urlParams = useParams(); // example.com/product/111 => {productId: 111}
    const navigate = useNavigate();
    return(
        <div className="product-detail">
            <h2>Product Detail</h2>
            <h4>Product: {urlParams.productId}</h4>

            <button onClick={() => {
                navigate("/");
            }}>
                Back to product
            </button>
        </div>
    );
}
 export default ProductDetail;