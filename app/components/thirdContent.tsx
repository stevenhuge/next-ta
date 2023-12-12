import Link from "next/link";

type Comment = {
  id: number;
  title: string;
  description: string;
};

async function getComment() {
  const res = await fetch("http://localhost:5100/product-era", {
    cache: "no-store",
  });
  return res.json();
}

const ThirdC = async () => {
  const comments: Comment[] = await getComment();
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div>
          {/* Teks di sebelah kiri */}
          <p className="font-bold" style={subtext}>
            LES SINDO
          </p>
          <p className="text-gray-500 font-semibold" style={text}>
            Program persiapan karier yang komprehensif untuk mempersiapkan generasi terbaik Indonesia
          </p>
          <br />
          <p className="text-gray-500" style={text}>
            LES SINDO adalah bagian dari kebijakan Merdeka Belajar <br />
            oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi <br />
            (Kemendikbudristek) yang memberikan seluruh mahasiswa kesempatan{" "}
            <br /> untuk mengasah kemampuan sesuai bakat dan minat dengan terjun{" "}
            <br />
            langsung ke dunia kerja sebagai langkah persiapan karier.
          </p>
        </div>
        <div className="lg:ml-4">
          <img
            src="/react1.jpg"
            alt="Gambar"
            className="lg:ml-4"
            style={content}
          />
        </div>
      </div>

      <div style={child}>
        <p
          className="text-center"
          style={{ fontWeight: "bold", fontSize: "45px" }}
        >
          Pertanyaan Umum
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex mt-10 items-center justify-center">
              <div className="max-w-sm border-b border-gray-200 shadow dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5
                      style={{ fontSize: "17px" }}
                      className="mb-2 font-semibold tracking-tight text-gray-500 "
                    >
                      {comment.description}
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const child = {
  marginTop: "10rem",
};
const content = {
  borderRadius: "10px",
  opacity: '70%',
  marginTop: '2rem',
};
const subtext = {
  fontSize: "45px",
};
const text = {
  fontSize: "20px",
};

export default ThirdC;
