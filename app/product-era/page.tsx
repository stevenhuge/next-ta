import AddProductEra from "./addProduct";
import NavbarAdmin from "../components/nav-admin";
import DeleteEra from "./deleteProduct";
import UpdateProduct from "./updateProduct";


export const metadata = {
  title: "Product List",
};

type Product = {
  id: number;
  title: string;
  description: string;
};


async function getProducts() {
  const res = await fetch("http://localhost:5100/product-era", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const product: Product[] = await getProducts();
  
  return (
    <>
    <NavbarAdmin/>
    <div className="py-10 px-10" style={content}>
      <div className="py-2">
        <AddProductEra />
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
          {product.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td className="whitespace-normal">{product.description}</td>
              <td className="flex whitespace-normal">
                <div className="mr-1">
                  <UpdateProduct {...product}/>
                </div>

                <DeleteEra {...product}/>
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

