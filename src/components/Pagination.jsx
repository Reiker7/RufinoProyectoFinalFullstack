import React from 'react'

const Pagination = ({totalPosts, postPerPage, setCurrentPage,currentPage,changePag }) => {
    let pages = [1, 2, 3, 4, 5]
    for(let i = 1; i<= Math.ceil(totalPosts/postPerPage); i++) {
        
    }
  return (
    <>
        {
        pages.map((page, index) => {
            return <button className={page == currentPage ? "btnPage active" : "btnPage"} onClick={() => (setCurrentPage(page), changePag(page)) } key={index}>{page}</button>
        })
        }
    </>
  )
}

export default Pagination