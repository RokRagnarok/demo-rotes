import React from 'react';

function Pagination({nextPage,prevPage,goToPage, pages}) {

    let pageButtons =  [];
    for (let i = 1; i <= pages; i++) {
        pageButtons.push(<button key={i} 
        onclick ={()=> goToPage(i)}>
            {i}
            </button>)
    }
    return (
        <div>
            {prevPage && (<button onclick= {prevPage}>◄</button>)}
            {pageButtons}
            {nextPage && (<button onclick= {nextPage}>►</button>)}
        </div>
    );
}

export default Pagination;