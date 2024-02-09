import ReactDOM from "react-dom";
import { useState } from "react";

const Modal = ({status, data, setStatus, contentLoading }) => {
  if (!status) return null

  const [editableData, setEditableData] = useState(data);

  const handleFieldChange = (propertyName, value) => {
    setEditableData({
      ...editableData,
      [propertyName]: value,
    });
  };

  const closeModal = () => {
    
    setStatus(false)
  }

  return ReactDOM.createPortal(
    <>
      <div className="modalContainer">
        <p className="modalCloseButton" style={{ display: contentLoading ? 'none' : 'block' }} onClick={ () => closeModal }>&#215;</p>
        <div className="modalContentContainer">
        <form className="formTemplate">
          {Object.keys(data).map((propertyName, index) => (
            <>
              {index !== 0 && (
                <>
                  <label htmlFor={propertyName}>{propertyName}:</label>
                  <input
                    type="text"
                    id={propertyName}
                    value={editableData[propertyName]}
                    onChange={(e) =>
                      handleFieldChange(propertyName, e.target.value)
                    }
                  />
                </>
              )}
            </>
          ))}
        </form>
        </div>
      </div>
    </>, document.getElementById('modal')
  )
}

export default Modal