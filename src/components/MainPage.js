import React, { useState,useEffect } from 'react'
import axios from 'axios' 
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const MainPage =()=>{

                    const[state,setState]=useState([])

    const Bookapi =()=>{

            axios.get('https://api.nytimes.com/svc/books/v3/lists.json?api-key=tmAXXN9LZsmjO2JrmGlj6S5T7ahNn1fq&list=hardcover-fiction').then(responce=>{
                console.log(responce);
                setState(responce.data.results)
            })
    }
    useEffect(() => {
        Bookapi()
      },[]);



    return(
    <div>
         <div className='h-72 bg-cyan-700'>
             <div className='flex justify-center p-8 text-4xl font-bold text-center sm:text-7xl text-blue-50'>New York Time Books Collection</div>
             <div className='flex justify-center text-2xl font-bold text-center text-white sm:text-4xl sm:columns-12'>Choose your favorite</div>
             </div>
               
        <div className='flex justify-center p-8 m-10 text-lg font-bold sm:text-3xl sm:text-center text-slate-100'>List of Books</div>
        <div className='flex flex-wrap justify-between px-10 font-bold text-gray-200 sm:leading-10 sm:text-xl sm:mx-10 sm:px-36'>
        {
                    state.map((item)=>
                    <div className='w-full mb-4 overflow-auto sm:w-80 sm:h-100' key={item.amazon_product_url}>
                    {(item.book_details).map((book)=>
                    <div className='text-center' key={book.title}>
                        <div>{book.title}</div>
                        <div className='mt-4 text-lg text-yellow-100'>{book.description}</div>
                        <div className='leading-6 MoreDeatils '>
                            <div className='text-center'>More Details</div>
                           <div>Author : {book.author}</div>
                           <div>Contributor: {book.contributor}</div>
                           <div>Publisher: {book.publisher}</div>
                           <div>Price: {book.price}</div>
                           
                        </div>
                    
                    </div>
                    )}
                    <div className='flex justify-center'>
                        <Link className='text-red-400' to={item.amazon_product_url}>Purchace</Link>
                    </div>
                  
                    
                    
                    
                    </div>
                      
                    )
        } 
        </div>
               

       
    </div>
    )
   
}