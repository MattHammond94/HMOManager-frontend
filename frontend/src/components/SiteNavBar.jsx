const SiteNavBar = ({ site }) => {
  return (
    <div className="siteNav">
        <img src="/stock-image.jpg" alt="stock-image" />
        <div className="siteNavInfo">
          <h1>{site.name}</h1>
          <p>{site.address}</p>
        </div>
      </div>
  )
}

export default SiteNavBar