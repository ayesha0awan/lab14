import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import products from '../data/products.js';
import { addToCart } from '../store/cartSlice.js';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found. <Link to="/">Back to shop</Link></p>;
  }

  return (
    <div className="card">
      <h1>{product.title}</h1>
      <p className="muted">{product.category}</p>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button className="btn" onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button className="btn ghost" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}