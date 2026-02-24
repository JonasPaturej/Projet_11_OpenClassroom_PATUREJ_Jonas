import { useState } from "react"

export default function Gallery({ pictures, title}) {
    const [index, setIndex] = useState(0)
    const total = pictures.length
    const prev = () => setIndex((i) => (i - 1 + total) % total)
    const next = () => setIndex((i) => (i + 1) % total)

    return(
        <div className="gallery">
            <img className="gallery_img" src={pictures[index]} alt={title}/>

            {total > 1 && (
                <>
                    <button className="gallery_btn gallery_btn--left" onClick={prev} aria-label="Image précédente">
                        <i className="fa-solid fa-angle-left gallery_icon" />
                    </button>
                    <button className="gallery_btn gallery_btn--right" onClick={next} aria-label="Image suivante">
                        <i className="fa-solid fa-angle-right gallery_icon" />
                    </button>
                    <div className="gallery_count">
                        {index + 1}/{total}
                    </div>
                </>
            )}
        </div>
    )
}