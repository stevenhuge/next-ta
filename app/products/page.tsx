import NavbarAdmin from "../components/nav-admin";
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

export const metadata = {
  title: "Product List",
};

type Product = {
  id: number;
  title: string;
  desc: string;
  image: string;
};


async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  
  return (
    <>
    <NavbarAdmin/>
    <div className="py-10 px-10" style={content}>
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full mt-10">
        <thead>
          <tr>
            <th>#</th>
            <th>NAMA PERUSAHAAN</th>
            <th>KETERANGAN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td className="whitespace-normal">{product.desc}</td>
              <td className="flex whitespace-normal">
                <div className="mr-1">
                  <UpdateProduct {...product} />
                </div>
              
                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
   
    </>

    
  );
}

const content = {
  border: '1px solid',
} 

