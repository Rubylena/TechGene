import { TData } from "../../InterfaceAndTypes/types";

export default function Product({ product }: { product: TData[] }) {
  return (
    <div className="product-grid my-7">
      {product?.map((f, i) => {
        return (
          <div
            key={i}
            className="w-[14em] h-[19em] shadow rounded text-center hover:bg-white hover:shadow-lg hover:drop-shadow-lg hover:scale-[1.1] hover:p-2 transition-all cursor-pointer"
          >
            <img
              src={f.url}
              alt={f.name}
              className="w-full h-[65%] object-cover transition-all rounded drop-shadow-sm"
            />
            <div className="mt-2">
              <p className="text-text text-secondaryColor p-1 capitalize">
                {f.name}
              </p>
              <p className="text-[0.8rem] ">
                ₦{f.price.toLocaleString("en-US")}
              </p>
              <button className=" hover-effect m-2 text-[0.8rem] border-secondaryColor border p-1 rounded">
                Order Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
