/**
 * Gérer un panier de produits.
 *
 * - Possibilité d'ajouter un produit avec sa quantité.
 *  (Sélection du produit parmis une liste + quantité)
 * - Possibilité de changer la quantité d'un produit.
 * - Possibilité de supprimer un produit complètement du panier.
 *
 * - Afficher la liste des produits du panier (name, quantity, total price).
 * - Afficher le prix total du panier ainsi que le nombre de produits.
 */
/**
 * Product = {
 *  id: number,
 *  name: string,
 *  price: number
 * }
 * CartItem = {
 *  product: number
 *  quantity: number
 * }
 */
 

 const products = [
    {
      id: 1,
      name: "tomate",
      stocks: 10,
      colour: "red",
      price: 1,
    },
    {
      id: 2,
      name: "Poivron",
      stocks: 10,
      colour: "yellow",
      price : 5,
    },
    {
      id: 3,
      name: "Pastèque",
      stocks: 10,
      price : 7,
    },
  ];

  export default function Cart() {
    
    return (
      <div>
        <ul>
          {products
            .filter((p) => p.stocks)
            .map((product) => (
              <li id={product.id}>{product.id} | {product.name} {product.price}€</li>
            ))}
        </ul>
        Total Stock : {products.reduce((acc, p) => acc + p.stocks, 0)}
        <ul>
        
        <button onClick={() => alert("Tomate")}>Tomate</button>
        <button onClick={() => alert("Poivron")}>Poivron</button>
        <button onClick={() => alert("Pastèque")}>Pastèque</button>
        </ul>
        
      </div>
    );
  }