import React from 'react';

export default function Note(props) {
     return (
          <div className='Note'>
               <h2 className='Note-title'>
                    {props.name}
               </h2>
               <button className='Note-delete' type='button'>
                    Remove
               </button>
               <div className='Note-dates'>
                    <div className='Note-dates-modified'>
                         Modified
                         <span classNmae='Date'>
                              {props.modified}
                         </span>
                    </div>
               </div>
          </div>
     )
}