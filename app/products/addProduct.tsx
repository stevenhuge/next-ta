"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setPriority } from "os";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    setIsMutating(true);

    await fetch("http://localhost:5100/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        price: price,
      }),
    });

    setIsMutating(false);

    setTitle("");
    setDesc("");
    setPrice("");
    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      
      <button className="btn" onClick={handleChange}>
        Add New
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Product Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Keterangan</label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Keterangan"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Harga</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Price"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div>
        <Link href="/product-era">
        <button className="btn mt-5 btn-info flex items-center">
  PINDAH TABEL KOMENTAR 
  <span className="ml-2" role="img" aria-label="right-arrow">
    ➔
  </span>
</button>

        </Link> 
        <h3 className="mt-5 form-control text-center px-5 py-5 rounded" style={sub}>TABEL PROGRAM PEMBELAJARAN</h3>
      </div>
    </div>

  );
}


const sub = {
  backgroundColor: '#4F4557',
  fontSize: '25px'
}
