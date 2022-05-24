import React from 'react'
import Nav from './navigation'
import './info.css'
import Footer from './footer'

export default class Info extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.location.state.isi.title,
            author: this.props.location.state.isi.author,
            category: this.props.location.state.isi.category,
            description: this.props.location.state.isi.description,
            pic: this.props.location.state.isi.image,
            url: this.props.location.state.isi.url,
            source: this.props.location.state.isi.source,
            date: this.props.location.state.isi.published_at
        }
    }

    render() {
        const { title, author, category, description, pic, url, source, date } = this.state

        if(!author){
            this.setState({author: '-'})
        } 

        if(!pic){
            return (
                <div>
                    <Nav />
                    <div id="isi">
                        <div className="konten">
                            <p id="kat">{category}</p>
                            <h1 id="title">{title}</h1>
                            <p id="autDate">Author: <span id="author">{author}</span>  |  {date}</p>
                            <p id="des">{description}</p>
                            <p id="source">Source: {source}</p>
                            <div id="btn">
                                <a href={url}><button id="seeNews">See News</button></a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        } else{
            return(
                <div>
                    <Nav />
                    <div id="isi">
                        <div className="konten">
                            <p id="kat">{category}</p>
                            <h1 id="title">{title}</h1>
                            <p id="autDate">Author: <span id="author">{author}</span>  |  {date}</p>
                            <img id="pic" src={pic} alt={title}/>
                            <p id="des">{description}</p>
                            <p id="source">Source: {source}</p>
                            <div id="btn">
                                <a href={url}><button id="seeNews">See News</button></a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}
