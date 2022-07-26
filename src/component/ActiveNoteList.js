import React from 'react'
import NoteInfo from './sub-component/NoteInfo'
import NoteNull from './sub-component/NoteNull';

function ActiveNoteList({data, onDelete, setArchive}) {
  const filter = data.filter((e)=>e.archived===false);
  
  return (
    <div className='active-container'>
        <h2>Catatan Aktif</h2>
        
        {(filter.length>0)?filter.map((e)=>(
            <NoteInfo key={e.id} onDelete={onDelete} setArchive={setArchive} {...e} />
        )):<NoteNull /> }
    </div>
  )
}

export default ActiveNoteList