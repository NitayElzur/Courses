import './RevCard.css'
function RevCard({ value }) {
    return (
        <div id='revCardMain'>
            <div id='revCardTop'>
                <img id='revCardImg' src={value.img} alt="" />
                <div className="bigText">{`${value.name}, ${value.age}`}</div>
            </div>
            <hr id='revCarHr' />
            <div id="revCardQuote">
                <div>
                    {`Course: ${value.education}`}
                </div>
                <div id='revCardReview'>
                    {value.review}
                </div>
            </div>
        </div>
    )
}
export default RevCard;