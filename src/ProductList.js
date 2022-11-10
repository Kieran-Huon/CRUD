export const products = [
  {
    id: 1,
    name: "Tomate",
    stocks: 10,
    price: 1,
  },
  {
    id: 2,
    name: "Poivron",
    stocks: 0,
    price: 4,
  },
  {
    id: 3,
    name: "Pastèque",
    stocks: 10,
    price: 10,
  },
];

export default function ProductList() {
  return (
    <div>
      <ul>
        {products
          .filter((p) => p.stocks)
          .map((product) => (
            <li id={product.id}>{product.name}</li>
          ))}
      </ul>
      Total Stock : {products.reduce((acc, p) => acc + p.stocks, 0)}
    </div>
  );
}

//[
//    "product 1",
//    "product 2",
//    "product 3"
//];