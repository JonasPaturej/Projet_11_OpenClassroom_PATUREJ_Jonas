export default function Banner({ image, title }) {
    return(
        <div className="banner">
            <img src={image} alt="" className="banner_img"/>
            {title && <h1 className="banner_title">{title}</h1>}
        </div>
    )
}