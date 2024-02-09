
const SiteTile = ({ data }) => {

  return (
    <>
      <div>
        <div className="siteImgContainer">
          <img src="/stock-image.jpg" alt="stock-image" />
        </div>
        <div className="siteContentContainer">
          <h1>{data.name}</h1>
          <p>{data.address}</p>
        </div>
      </div>
    </>
  );
};

export default SiteTile;
