
const DeleteSiteButton = () => {
  const handleDelete = async () => {
    console.log('Site Deleted')
  }

  return (
    <button onClick={ handleDelete }>Delete Site</button>
  )
}

export default DeleteSiteButton