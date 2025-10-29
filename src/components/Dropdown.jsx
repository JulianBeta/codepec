import React, { useState, useId } from 'react'

const Dropdown = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const id = useId()
  const panelId = `dropdown-panel-${id}`

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="dropdown-button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="dropdown-title">{title}</span>
        <span className="indicator" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>

      <div id={panelId} className="dropdown-content" role="region" aria-label={title}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown