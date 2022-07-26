import React from 'react'

function NoteInfo({id, title, body, createdAt,onDelete,setArchive}) {
  return (
    <div className='note-data'>
        <div className="flex-section">
            <h3>{title}</h3>
            <div className="note-button">
                <img src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" onClick={()=>onDelete(id)} alt=''/>
                <img src="https://img.icons8.com/ios-filled/50/000000/archive.png" onClick={()=>setArchive(id)} alt=''/>
            </div>
            
        </div>
        <p>{createdAt}</p>
        <p>{body}</p>
    </div>
  )
}

export default NoteInfo