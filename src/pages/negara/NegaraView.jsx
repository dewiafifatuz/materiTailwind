import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const NegaraView = ({ ubahCari, cariProduct, hasilCari, hasilFilter }) => {
  try {
    return (
      <div className="negara dark:bg-black bg-neutral-400">
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
        <center className="text-black dark:text-white">
        <p>
          Hasil dari : {cariProduct}, ditemukan : {hasilCari?.founded}
        </p>
        </center>

        <div className="flex justify-center pt-4 pb-16">
          <div className="grid grid-cols-3 gap-4">
            {hasilFilter?.map((product, index) => (
              <div
                className="card bg-cyan-200 dark:bg-slate-500 dark:text-white w-96 shadow-xl"
                key={index}
              >
                <figure>
                  <img src={product.flag} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <h2 className="card-title">{product.currency}</h2>
                  <p className="line-clamp-3">{product.population}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/rincian/${product.id}`}
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
export default NegaraView;
