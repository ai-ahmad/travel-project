import { useState } from "react";
import { Link } from "react-router-dom";
const Deshboard = () => {
  return (
    <div>
      <aside className=" bg-gray-800 text-white w-64 min-h-screen fixed top-0 left-0 flex  flex-col justify-center  gap-[30px] p-4">
        <Link to="/deshboard/AddProduct" className="font-bold text-white">
          ADD PRODUCT
        </Link>
        <Link to="/" className="font-bold text-white">
          SEARCH PRODUCT
        </Link>
        <Link to="/deashboard/DelitProduct" className="font-bold text-white">
          DELIT PRODUCT
        </Link>
        <Link to="/deshboard/RenameProduct" className="font-bold text-white">
          RENAME PRODUCT
        </Link>
      </aside>
    </div>
  );
};

export default Deshboard;
