import Site from "../components/Site";

const SitesFeed = () => {

  // useEffect here for fetching all sites from backend

  return (
    <div>
      Loop through all sites and return an array of Site components
      <Site />
    </div>
  )
}

export default SitesFeed