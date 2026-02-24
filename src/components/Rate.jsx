export default function Rate({ value }) {
    const rating = Number(value) || 0

    return (
        <div className="rate">
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < rating

                return (
                    <i key={i} className={"fa-solid fa-star rating_star" + (filled ? " rating_star--filled" : "")}/>
                )
            })}
        </div>
    )
}