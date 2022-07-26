import React from 'react'
import NoteInfo from './sub-component/NoteInfo'
import NoteNull from './sub-component/NoteNull';

function ArchivedNoteList({data,onDelete, setArchive}) {
  const filter = data.filter((e)=>e.archived===true);
  return (
    <div>
        <h2>Arsip Catatan</h2>
        {(filter.length>0)?filter.map((e)=>(
            <NoteInfo key={e.id} onDelete={onDelete} setArchive={setArchive} {...e} />
        )):<NoteNull /> }
    </div>
  )
}

export default ArchivedNoteList