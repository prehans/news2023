import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
 let  {title,description ,imageUrl,newsUrl}=this.props;
    return (
      <div>
       <div classNmae="card"  style={{width: "18rem" ,hover:"backgroundcolor:red"  ,padding:"12px"}} >
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="shadow-lg p-3 mb-5 bg-white rounded">
    <div className="hover-shadow">
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
    </div>
    </div>
  </div>
</div>
</div>
   
    )
  }
}

export default NewsItem
