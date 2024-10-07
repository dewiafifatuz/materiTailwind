import { Link } from "react-router-dom";

const BerandaView = ({ ubahCari, cariProduct, hasilCari, hasilFilter }) => {
  try {
    return (
      <div className="beranda dark:bg-black bg-neutral-400">
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
        <p>
          Hasil dari : {cariProduct}, ditemukan : {hasilCari?.founded}
        </p>

        <div className="flex justify-center pt-4 pb-16">
          <div className="grid grid-cols-3 gap-4">
            {hasilFilter?.restaurants?.map((product, index) => (
              <div
                className="card bg-cyan-200 dark:bg-slate-500 dark:text-white w-96 shadow-xl"
                key={index}
              >
                <figure>
                  <img
                    src={`https://restaurant-api.dicoding.dev/images/small/${product.pictureId}`}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="line-clamp-3">{product.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={"/detail/" + product.id}
                      className="btn btn-primary"
                    >
                      View Detail
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
};
export default BerandaView;
