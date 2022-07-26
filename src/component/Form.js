import React from 'react'



class Form extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title : '',
      body : '',
      maxlength: 50,
      keyword:'',
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeBody = this.onChangeBody.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.onChangeKeyword = this.onChangeKeyword.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }
  onChangeTitle(event){
    (event.target.value.length<=50)?
    this.setState(()=>{
      return{
        title:event.target.value,
        maxlength:50-event.target.value.length
      }
    }):alert('Maksimum type')
  }
  onChangeBody(event){
    this.setState(()=>{
      return{
        body:event.target.value
      }
    })
  }

  onSubmit(event){
    event.preventDefault();
    this.props.addNote(this.state);
  }

  onChangeKeyword(event){
    this.setState(()=>{
      return{
        keyword:event.target.value
      }
    })
  }
  
  onSearch(event){
    event.preventDefault();
    this.props.searchNote(this.state);
  }

  render(){
    return(
      <div className='form'>
        <form onSubmit={this.onSubmit}>
          <p>Judul: </p><span>sisa karakter: {this.state.maxlength}</span>
          <input type="text" value={this.state.title} onChange={this.onChangeTitle} name="title" id="title" placeholder='Masukkan Judul Catatan..'/>
          <p>Isi: </p>
          <textarea name="body" value={this.state.body} onChange={this.onChangeBody} id="body" cols="30" rows="10" placeholder='Masukkan isi catatan'></textarea><br />
          <button type='submit'>Tambah Catatan</button>
        </form>
        <form className='search-form' onSubmit={this.onSearch}>
          <input type="text" name="keyword" id="keyword" value={this.state.keyword} onChange={this.onChangeKeyword} placeholder='cari katakunci pencarian'/>
          <button type='submit'>Cari Catatan</button>
        </form>
    </div>
    )
  }
}

export default Form