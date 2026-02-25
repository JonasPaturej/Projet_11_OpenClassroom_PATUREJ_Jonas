import { useState } from "react"

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <button type="button" className="collapse_header" onClick={() => setIsOpen((v) => !v)} aria-expanded={isOpen}>
                <h2 className="collapse_title">{title}</h2>
                <i className={"fa-solid " + (isOpen ? "fa-angle-down " : "fa-angle-up ") + "collapse_chevron"}/>
            </button>

            <div className={"collapse_content" + (isOpen ? " collapse_content--open" : "")}>
                <div className="collapse_inner">{children}</div>
            </div>
        </div>
    )
}