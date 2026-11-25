import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice.js';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h3><Link to={'/product/' + product.id}>{product.title}</Link></h3>
      <p className="muted">{product.category}</p>
      <p className="price">${product.price}</p>
      <button className="btn" onClick={() => dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  );
}