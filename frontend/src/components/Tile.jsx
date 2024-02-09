const Tile = ({ data }) => {



  return (
    <div>
      <a href={`/site/${data.siteId}`}>
        <div className="siteContainer">
          {data.address ?  
            <div>
              <div className="siteImgContainer">
                <img src="/stock-image.jpg" alt="stock-image" />
              </div>
              <div className="siteContentContainer">
                <h1>{ data.name }</h1>
                <p>{ data.address }</p>
              </div>
            </div> : 
            <div>
              <div className="siteContentContainer">
                <h1>{ data.name }</h1>
                <p>{ data.isOccupied }</p>
                <p>{ data.movedInDate }</p>
                <p>{ data.contractEndDate }</p>
                <p>{ data.rentFrequency }</p>
                <p>{ data.rentAmount }</p>
              </div>
            </div>
          }
        </div>
      </a>
    </div>

  )
}

export default Tile