const HeaderNavBar = ({ data }) => {
  return (
    <div className="siteNav">
        <img src="/stock-image.jpg" alt="stock-image" />
        <div className="siteNavInfo">
          <h1>{data.name}</h1>
          <p>{data.address}</p>
        </div>
      </div>
  )
}

export default HeaderNavBar