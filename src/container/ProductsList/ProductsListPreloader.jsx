import React, { useEffect } from "react";
import { Card, notification } from "antd";


function ProductsListPreloader() {
  useEffect(() => {
    return () => {
      notification.success({ message: "Data is loaded!!!" });
    };
  }, [])

  return new Array(12).fill(null).map((_, index) => (
    <Card
      loading
      hoverable
      cover={<img alt="" src="" />}
    >
      <Card.Meta title="" description="" />
    </Card>
  ));
}

export default ProductsListPreloader;
