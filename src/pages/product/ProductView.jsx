import { Link } from "react-router-dom";

export default function ProductView({ data }) {
  try {
    return (
      <div className="product">
        <label className="input input-bordered flex items-center">
          <input
            type="text"
            className="grow cari"
            placeholder="Search"
            onChange={(input) => ubahCari(input.target.value)}
          />
        </label>
        
        <div className="grid grid-cols-3 gap-4">
          {data?.map((product, index) => (
            <div className="card bg-base-100 w-96 shadow-xl" key={index}>
              <figure>
                <img src={product.image} alt="Shoes" />
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
    );
  } catch (error) {
    console.log(error);
  }
}
