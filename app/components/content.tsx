import Link from "next/link";

export const metadata = {
  title: "Product List",
};

type Product = {
  id: number;
  title: string;
  desc: string;
};

async function getProducts() {
  const res = await fetch("http://localhost:5100/products", {
    cache: "no-store",
  });
  return res.json();
}

const Content = async () => {
  const product: Product[] = await getProducts();
  return (
    <>

      <center>
        {/* <table  className="w-full table mt-10 me-2">
        <thead>
            <tr >
                <th colSpan={3} className="text-center">Pilihan Sektor Magang Digital</th>
            </tr>
        </thead>
        <tbody>
            {product.map((product, index) => (
             <tr key={product.id}>
                <td style={content}>
                    <Link href="/">
                      {product.title}
                    </Link>
                </td>
                <td className="break-all" style={contents}>
                    {product.desc}
                </td>
                <td style={contentt}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1a9 9 0 110 18 9 9 0 010-18zm-1.293 12.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414L9 12.586 4.707 8.293a1 1 0 00-1.414 1.414l5 5z" />
            </svg>
            <p className="font-semibold">Terverifikasi</p>
                </td>
            </tr>   
            ))}
        </tbody>
        </table> */}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center" colSpan={5}>
                  PROGRAM LES PEMBELAJARAN
                </th>
              </tr>
            </thead>
            <tbody>
                {product.map((product, index) => ( 
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Link href="https://forms.gle/CiBejQFVLPhMyXss7">{product.title}
                  </Link>
                  
                </th>
                <td className="px-6 py-4" colSpan={3}>
                  <Link href="https://forms.gle/CiBejQFVLPhMyXss7">{product.desc}
                  </Link>
                  </td>
                <td className="px-6 py-4 text-right" style={contentt}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 1a9 9 0 110 18 9 9 0 010-18zm-1.293 12.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414L9 12.586 4.707 8.293a1 1 0 00-1.414 1.414l5 5z" />
                </svg>
                </td>
              </tr>
                ))}         
            </tbody>
          </table>
        </div>
      </center>
    </>
  );
};

const judul = {
  border: "1px solid",
  height: "15%",
  padding: "18px",
  borderRadius: "2px",
};


const contentt = {
  color: "#A6ADBB",
};

export default Content;
