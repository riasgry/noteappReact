import React from 'react'
import ActiveNoteList from './component/ActiveNoteList'
import ArchivedNoteList from './component/ArchivedNoteList'
import { getInitialData, showFormattedDate } from './utils'
import Form from './component/Form'

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:getInitialData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.setArchiveHandle = this.setArchiveHandle.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }
    onDeleteHandler(id){
        const data = this.state.data.filter(e=>e.id!==id)
        this.setState({data})
    }

    setArchiveHandle(id){
        const datas = this.state.data.map(e=>e).find(e=>e.id===id)
        if(datas.archived!==true){
            datas.archived=true
        }else{
            datas.archived=false
        }
        console.log(datas)
       this.setState(this.state.data.map((e=>e)))
    }

    onAddNoteHandler({body,title}){
        this.setState((e)=>{
            return{
                data: [
                    ...e.data,
                    {
                        id:+new Date(),
                        title,
                        body,
                        createdAt:showFormattedDate(new Date()),
                        archived: false
                    }
                ]
            }
        })
    }
    onSearchHandler({keyword}){
        const word = keyword.toLowerCase().split(/[,.\s]/);
        const datas = this.state.data.map((e=>e.body.toLowerCase().indexOf(word.map(e=>e))))
        
        const data=[]
        for(const a in datas){
            if(datas[a]!==-1){
                data.push(this.state.data[a])
            }
        }
        
        this.setState({data})
    }


    render(){
        return (
            <div className='inner-section'>
                <div className='flex-section'>
                    <div className='left-side'>
                        <Form addNote={this.onAddNoteHandler} searchNote={this.onSearchHandler} />
                        <ArchivedNoteList data={this.state.data} onDelete={this.onDeleteHandler} setArchive={this.setArchiveHandle} />
                    </div>
                    <div className="right-side">
                        
                    <ActiveNoteList data={this.state.data} onDelete={this.onDeleteHandler} setArchive={this.setArchiveHandle}/>

                    </div>
                </div>    
            </div>
          )
    }
}


export default NoteApp