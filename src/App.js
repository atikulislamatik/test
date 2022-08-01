import axios from 'axios';
import { useEffect, useState } from "react";
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Pagination from './components/Pagination';
import Products from './components/Products';
import Search from './components/Search';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perpage = 6;

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
      setLoading(false);
      setProducts(res.data.products);
      

      setTotalPages(Math.ceil(res.data.products.length / perpage));
    };
    fetchProduct();
  }, [query]);

  const handleClick = num => {
    setPage(num);
  }


  return (
    <div>
      <Navbar />

      <Search query={query}
        loading={loading}
        setQuery={setQuery}
      />

      {
        products.length > 0 && products ? <>
          {loading ? <Loader /> : <>
            <Products products={products} page={page} />
            <Pagination totalPages={totalPages} handleClick={handleClick} />
          </>}
        </> : <NotFound/>
      }

    </div>
  )
}

export default App;