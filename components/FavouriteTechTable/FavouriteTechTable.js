import React, { useState } from "react";
import { row1, row2 } from "./val";

function FavouriteTechTable() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mb-28 overflow-x-auto relative border-top-color:bg-white  xs:py-6">
        <table align="center" className="border-2 p-1 ">
          <tr className="border-2 p-1 ">
            {row1.map((item) => (
              <td className="border-2 p-1 " align="center" width="96">
                {/* <a href=""> */}
                <img src={item.imgUrl} width="48" height="48" alt="moralis" />
                {/* </a> */}
                <br />
                <p className="mb-3 font-normal text-white">{item.name}</p>
              </td>
            ))}
          </tr>

          <tr className="border-2 p-1 ">
            {row2.map((item) => (
              <td className="border-2 p-1 " align="center" width="96">
                {/* <a href=""> */}
                <img src={item.imgUrl} width="48" height="48" alt="moralis" />
                {/* </a> */}
                <br />
                <p className="mb-3 font-normal text-white">{item.name}</p>
              </td>
            ))}
          </tr>
        </table>
      </div>
    </>
  );
}

export default FavouriteTechTable;
