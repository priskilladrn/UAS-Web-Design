import axios from 'axios'
import React from 'react'
import Nav from '../navigation'
import '../App.css'
import Footer from '../footer'

export default class General extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            keyWord: '',
            ngeload: false,
            isi:{},
        }
    }
    
    componentDidMount(){
        let apiKey = "07a135a355f39dfe855efddc2bfd7142";
        let kategori = "&categories=general"
        let url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=en${kategori}`;

        axios.get(url).then(r => {
            this.setState({
                ngeload: true,
                isi : r.data
            })
        })
    }
    
    changeKeyWords = (event) => {
        this.setState ({keyWord: event.target.value})
    }
    
    search = () => {
        if(this.state.keyWord.length < 3){
            alert("keyword length must be more than 3 characters!")
            return
        } else{
            this.props.history.push('/search/' + this.state.keyWord)
        }
    }
    
    searchKey = (event) => {
        if(event.key === "Enter"){
            if(this.state.keyWord.length < 3){
                alert("keyword length must be more than 3 characters!")
                return
            } else{
                this.props.history.push('/search/' + this.state.keyWord)
            }
        }
    }
    
    newsInfo = (i) =>{
        this.props.history.push({
            pathname: '/Info',
            state: { isi: i }
        })
    }
      
    render() {
        let{isi, ngeload} = this.state

        if(ngeload){
            return (
            <div id="body">
                <Nav />
                <div id="isi">
        
                    <div id="search">
                        <input  onKeyPress={this.searchKey} type = "text" placeholder="Type here to search" value = {this.state.keyWord} onChange={this.changeKeyWords}/>
                        <button type = "submit" onClick = {this.search}>Search</button>
                    </div>
            
                    <div id="news-List">
                        {isi.data.map((item) => (
                        <div className="news" key={item.published_at}>
                            <p className="info"><span className="bahasa">{item.language}</span> - {item.published_at}</p>
                            <h3 className="judul" style = {{cursor: 'pointer'}} onClick = {() => this.newsInfo(item)}>{item.title}</h3>
                            <p className="kategori">Category: <span className="katName">{item.category}</span></p>
                        </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
            )
        }
        else{
          return (
            <div id="body">
              <Nav />
              <div id="isi">
      
                <div id="search">
                  <input  onKeyPress={this.searchKey} type = "text" placeholder="Type here to search" value = {this.state.keyWord} onChange={this.changeKeyWords}/>
                  <button type = "submit" onClick = {this.search}>Search</button>
                </div>

                <div id="news-List">
                    <h1>Loading...</h1>
                </div>
              </div>
              <Footer />
            </div>
          )
        }
    }
}
