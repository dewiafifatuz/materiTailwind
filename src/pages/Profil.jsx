const Profil = () => {
  return (
    <div className="profil bg-cyan-200 dark:bg-slate-500">
      <div className="overflow-x-auto pt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="dark:text-white text-black">Name</th>
              <th className="dark:text-white text-black">Tempat,Tanggal lahir</th>
              <th className="dark:text-white text-black">Nama Orang Tua</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="card bg-cyan-200 dark:bg-slate-500 dark:text-white w-96 shadow-xl">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLumeWZ-dbgVV1EKRZcYrkEFvu3NnCfsZwoQ&s"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold dark:text-white text-black">
                      Rayyanza Malik Ahmad
                    </div>
                    <div className="text-sm opacity-50 dark:text-white text-black">
                      Cipung Abubu
                    </div>
                  </div>
                </div>
              </td>
              <td className="dark:text-white text-black">
                RSU Bunda Jakarta
                <br />
                <span className="dark:text-white text-black">
                  26 November 2021
                </span>
              </td>
              <td className="dark:text-white text-black">
                Raffi Ahmad dan Nagita Slavina
              </td>
              <th>
                <button className="btn btn-ghost btn-xs dark:text-white text-black">
                  details
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="card bg-cyan-200 dark:bg-slate-500 dark:text-white w-96 shadow-xl">
                      <img
                        src="https://static.promediateknologi.id/crop/20x434:1073x1042/750x500/webp/photo/p1/155/2024/08/04/Screenshot_20240804_183959_Instagram-3366748224.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold dark:text-white text-black">
                      Kamari Sky Wassink
                    </div>
                    <div className="text-sm opacity-50 dark:text-white text-black">
                      Kamayii
                    </div>
                  </div>
                </div>
              </td>
              <td className="dark:text-white text-black">
                Jakarta
                <br />
                <span className=" dark:text-white text-black">
                  28 Agustus 2023
                </span>
              </td>
              <td className="dark:text-white text-black">
                Dali Wassink dan Jennifer Coppen
              </td>
              <th>
                <button className="btn btn-ghost btn-xs dark:text-white text-black">
                  details
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="card bg-cyan-200 dark:bg-slate-500 dark:text-white w-96 shadow-xl">
                      <img
                        src="https://akcdn.detik.net.id/visual/2024/07/19/lirik-lagu-ayo-bergembira-levian-al-fatih-billar-abang-l_43.jpeg?w=650&q=90"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold dark:text-white text-black">
                      Muhammad Levian Alfatih Billar
                    </div>
                    <div className="text-sm opacity-50 dark:text-white text-black">
                      Abang L
                    </div>
                  </div>
                </div>
              </td>
              <td className="dark:text-white text-black">
                Rumah Sakit Ibu dan Anak Bunda
                <br />
                <span className=" dark:text-white text-black">
                  26 Desember 2021
                </span>
              </td>
              <td className="dark:text-white text-black">
                Rizky Billar dan Lesti Kejora
              </td>
              <th>
                <button className="btn btn-ghost btn-xs dark:text-white text-black">
                  details
                </button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="card bg-pink-400 dark:bg-slate-500 dark:text-white w-96 shadow-xl">
                      <img
                        src="https://cdn1-production-images-kly.akamaized.net/kZwt8v-hXe-baBExU5XtqADIZrM=/500x667/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4721128/original/041915800_1705674292-WhatsApp_Image_2024-01-19_at_17.00.37.jpeg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold dark:text-white text-black">
                      Jemima Humairah Assegaf
                    </div>
                    <div className="text-sm opacity-50 dark:text-white text-black">
                      Jemoyy
                    </div>
                  </div>
                </div>
              </td>
              <td className="dark:text-white text-black">
                Jakarta
                <br />
                <span className=" dark:text-white text-black">
                  14 Januari 2022
                </span>
              </td>
              <td className="dark:text-white text-black">
                Achmad Rafey dan Syafira Haddad
              </td>
              <th>
                <button className="btn btn-ghost btn-xs dark:text-white text-black">
                  details
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profil;
