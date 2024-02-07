import Site from "../components/Site";

const SitesFeed = () => {

  //Replace with a fetch from backend api
  const sites = [
    { siteId: 1, name: "site1", address: "111 Sea House", rooms: "5" },
    { siteId: 2, name: "site2", address: "another address", rooms: "4" },
    { siteId: 3, name: "site3", address: "456 Ocean Avenue, Bournemouth, Dorset, BH9 7JZ", rooms: "1" },
    { siteId: 4, name: "A VERY LONG SITE NAME OK THIS IS LONG", address: "address", rooms: "3" },
    { siteId: 5, name: "site5", address: "", rooms: "1" },
    { siteId: 6, name: "site6", address: "", rooms: "5" },
    { siteId: 7, name: "site7", address: "", rooms: "7" },
  ]

  return (
    <div className="siteFeedContainer">
      {sites && sites.map((site) => (
        <Site key={site.siteId} site={site} />
      ))}
    </div>
  )
}

export default SitesFeed