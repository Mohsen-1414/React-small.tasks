import { useEffect, useState } from "react";
import "./styles.css";

function LoadMoreData() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disable, setDisable] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((previousData) => [...previousData, ...result.products]);
        setIsLoading(false);
      }
      console.log(products);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (isLoading) {
    return <div>Data is being fetched, please wait</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disable ? <p>You have reached 100 products, no more</p> : null}
      </div>
    </div>
  );
}

export default LoadMoreData;
