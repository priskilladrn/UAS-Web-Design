import React from 'react'
import axios from 'axios'
import Nav from './navigation';
import Footer from './footer';

export default class NewsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ngeload: false,
      isi:{},
      keyWord: this.props.match.params.keyword,
    }
  }

  componentDidMount(){
    let apiKey = "07a135a355f39dfe855efddc2bfd7142";
    let keywords = `&keywords=${this.state.keyWord}`;
    let url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=en${keywords}`;

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
    } 

    else{
      this.setState({ngeload: false})
      this.props.history.push('/search/' + this.state.keyWord)
      let apiKey = "07a135a355f39dfe855efddc2bfd7142";
      let keywords = `&keywords=${this.state.keyWord}`;
      let url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=en${keywords}`;

      axios.get(url).then(r => {
          this.setState({
            ngeload: true,
            isi : r.data
        })
      })
    }
  }

  searchKey = (event) => {
    if(event.key === "Enter"){
      if(this.state.keyWord.length < 3){
        alert("keyword length must be more than 3 characters!")
        return
      } 
      
      else{
        this.setState({ngeload: false})
        this.props.history.push('/search/' + this.state.keyWord);
        let apiKey = "07a135a355f39dfe855efddc2bfd7142";
        let keywords = `&keywords=${this.state.keyWord}`;
        let url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=en${keywords}`;

        axios.get(url).then(r => {
          this.setState({
            ngeload: true,
            isi : r.data
          })
        })
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
    let {ngeload, isi, keyWord} = this.state

    if(!ngeload){
      return (
        <div id="body">
          <Nav />
          <div id="isi">
            <div id="search">
              <input  onKeyPress={this.searchKey} type = "text" placeholder="Search News..." value = {keyWord} onChange={this.changeKeyWords}/>
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
    else if(isi.data === null){
      return(
        <div id="body">
          <Nav />
          <div id="isi">
            <div id="search">
              <input  onKeyPress={this.searchKey} type = "text" placeholder="Search News..." value = {keyWord} onChange={this.changeKeyWords}/>
              <button type = "submit" onClick = {this.search}>Search</button>
            </div>
            <div id="news-List">
              <h1>Data Not Found!</h1>
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
              <input  onKeyPress={this.searchKey} type = "text" placeholder="Search News..." value = {keyWord} onChange={this.changeKeyWords}/>
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
  }
}

