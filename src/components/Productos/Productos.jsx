import React, { useState } from "react";
import {
  BtnMasMenos,
  ButtonConteiner,
  ProductosContainerStyled,
} from "./ProdutosStyles";

import Producto from "./Producto";
import { useSelector } from "react-redux";

const Productos = () => {
  const [limit, setLimit] = useState(8);
  let products = useSelector((state) => state.products.products);
  let totalProducts = useSelector((state) => state.products.totalProducts);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  if (selectedCategory) {
    products = products.filter(
      (producto) => producto.category === selectedCategory
    );
  }

  return (
    <>
      <ProductosContainerStyled>
        {products.map((producto, i) =>
          limit > i ? <Producto key={producto.id} {...producto} /> : null
        )}
      </ProductosContainerStyled>
      {!selectedCategory && (
        <ButtonConteiner>
          <BtnMasMenos
            onClick={() => setLimit(limit - 8)}
            secondary="true"
            disabled={8 === limit}
          >
            Ver menos
          </BtnMasMenos>
          <BtnMasMenos
            onClick={() => setLimit(limit + 8)}
            disabled={totalProducts <= limit}
            whileTap={{ scale: 0.95 }}
          >
            Ver más
          </BtnMasMenos>
        </ButtonConteiner>
      )}
    </>
  );
};

export default Productos;
