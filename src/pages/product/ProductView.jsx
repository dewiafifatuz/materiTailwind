import { Link } from "react-router-dom";

export default function ProductView({ data }) {
  try {
    return (
      <div className="product dark:bg-black bg-neutral-300">
        <div className="flex justify-center py-4">
          <label className="input w-full mx-16 input-bordered flex items-center">
            <input
              type="text"
              className="grow cari"
              placeholder="Search"
              onChange={(input) => ubahCari(input.target.value)}
            />
          </label>
        </div>

        <div className="flex justify-center pt-4 pb-16">
          <div className="grid grid-cols-3 pt-4 gap-4">
            {data?.map((product, index) => (
              <div
                className="card bg-cyan-200 dark:bg-slate-500 dark:text-white w-96 shadow-xl"
                key={index}
              >
                <figure className="pt-4">
                  <img src={product.image} className="object-contain rounded-xl w-[350px] h-[500px]" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="line-clamp-3">{product.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={"/detail/" + product.id}
                      className="btn btn-primary"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
