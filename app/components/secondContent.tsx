// components/SecondC.js
export const metadata = {
    title: "Product List",
};

type Product = {
    id: number;
    title: string;
    desc: string;
    price: number;
};

async function getProducts() {
    const res = await fetch("http://localhost:5100/products", {
        cache: "no-store",
    });
    return res.json();
}

const SecondC = async () => {
    const products: Product[] = await getProducts();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
                <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img
                            className="rounded-t-lg"
                            src="/buku.jpg"
                            alt=""
                        />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-350">
                                {product.title}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700" style={{ color: '#D2DE32' }}>
                            {product.price}
                        </p>
                        <a
                            href="/detail"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Selengkapnya 
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SecondC;
