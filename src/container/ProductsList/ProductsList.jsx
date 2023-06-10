import React, { useEffect, useState }  from "react";
import { Card, Modal } from "antd";

// components
import ProductsListPreloader from "./ProductsListPreloader";

// helpers
import { getProductsList, getSingleProduct } from "../../api/products";

// assets
import "../../assets/styles/containers/products-list.scss";


function ProductsList() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsList()
      .then(resp => setProducts(resp))
      .finally(() => setLoading(false))
  }, []);

  const handleProductClick = (id) => {
    getSingleProduct(id).then(resp => {
      Modal.success({
        content: (<div>
          <Card
            hoverable
            cover={<img alt="example" src={resp.image} />}
          >
            <Card.Meta title={resp.title} description={resp.description} />
          </Card>
        </div>)
      });
    });
  }


  return (
    <section className="lsn-products-list">
      {
        loading
          ? <ProductsListPreloader/>
          : products && products.map((item) => (
            <Card
              hoverable
              key={`product-${item.id}`}
              cover={<img alt="example" src={item.image} />}
              onClick={() => handleProductClick(item.id)}
            >
              <Card.Meta title={item.title} description={item.price} />
            </Card>
          ))
      }
    </section>
  );
}

export default ProductsList;
