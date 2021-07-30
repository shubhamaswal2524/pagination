import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";

const Paginationdata = () => {
  // const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsPerCount] = useState(5);
  const [itemsCountPerPage, setItemsPerCount] = useState(10);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage({ activePage: pageNumber });
  };

  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={5}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default Paginationdata;
