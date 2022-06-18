import {useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';

export default function PaginatedItems({ stories }) {

    const storiesPerPage=10   
    const [currentstories, setCurrentstories] = useState([]);
    const [pageCount, setPageCount] = useState(0);    
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {    
      const endOffset = itemOffset + storiesPerPage;    
      setCurrentstories(stories.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(stories.length / storiesPerPage));
    }, [itemOffset, storiesPerPage,stories]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * storiesPerPage) % stories.length;     
      setItemOffset(newOffset);
    };
  
    return (
      <> 
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-x-4 gap-y-8 px-3 py-5'>
       
     
        {stories && currentstories.map((story,index) => (
        <div key={index} className='w-full shadow-md shadow-neutral-400  flex flex-col justify-center items-center'>            
                <div className='h-[10vh] w-full flex justify-center items-center bg-slate-700'>
                <span className='font-serif font-normal text-xl  text-slate-50 text-center'>{story.title}</span>
                </div>
               <img src={story.thumbnail} alt="" className='h-[30vh] object-cover' />               
               <div className='w-full py-2 px-3'><a className='bg-[#334155] text-slate-50 px-3 text-xs py-1' href={story.side1.url}>Live Stream 1</a>
               <a className='bg-[#334155] text-slate-50 px-3 text-xs py-1 ml-3' href={story.side2.url}>Live Stream 2</a>
               </div>                
        </div>
        ))}
    </div>      
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center items-center w-full px-3 py-8 gap-2 md:gap-5"
          pageClassName=' text-slate-900 px-1 md:px-3 text-xs py-1'
          previousClassName='bg-slate-700 text-slate-50 px-1 md:px-3 text-xs py-1'
          nextClassName='bg-slate-700 text-slate-50 px-1 md:px-3 text-xs py-1'
          activeClassName='bg-slate-900 text-slate-50 px-1 md:px-3 text-xs py-1'
        />
      </>
    );
  }
  