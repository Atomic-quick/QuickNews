import React, { Component } from "react";

export class NewsItam extends Component {

    render() {
        let {title, description,imgurl,newsurl,author,date,source} = this.props;
        return <div className="my-3">
            <div className="card">
                <span className="position-absolute badge rounded-pill bg-danger" style={{display: "flex", justifyContent: 'flex-end', right: '0'}}>{source}</span>
                <img src={!imgurl?"https://img.freepik.com/free-vector/sphere-box-covered-with-red-cloth_1441-4178.jpg":imgurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author? author:"Unknown"} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary btn-dark">Read More</a>
                    </div>
            </div>
        </div>;
    }
}

export default NewsItam;
