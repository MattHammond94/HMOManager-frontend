const Site = ({ site }) => {

  return (
    <a href={`/site/${site.siteId}`}>
      <div className="siteContainer">
        <div className="siteImgContainer">
          <img src="/stock-image.jpg" alt="stock-image" />
        </div>
        <div className="siteContentContainer">
          <h1>{ site.name }</h1>
          <p>{ site.address }</p>
          <p>Current rooms: { site.rooms }</p>
        </div>
      </div>
    </a>
  )
}

export default Site