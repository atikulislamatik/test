import React from 'react';

const Pagination = ({ totalPages, handleClick }) => {

  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <>
      <ul className="pagination d-flex align-items-center justify-content-center pb-5 mt-3"   >
        {pages.map(num => (
          <li key={num} className="page-item"><a onClick={() => handleClick(num)} className="page-link" href="#">{num}</a></li>
        ))}
      </ul>
    </>
  )
}

export default Pagination