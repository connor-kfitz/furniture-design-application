import LinkProduct from "./link-product"

export default function Intro() {

    const introTiles= [
        {
            title: 'Luxury facilities',
            content: 'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.'
        },
        {
            title: 'Affordable Price',
            content: 'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that you rely on.'
        },
        {
            title: 'Many Choices',
            content: 'We provide many unique work space choices so that you can choose the workspace to your liking.'
        }
    ]

    return (
        <section className="intro">
            <ul className="intro-content">
                <li className="intro-content__item">
                    <div className="intro-content__large-title">
                        Why 
                        <br></br>
                        Choose Us
                        </div>
                </li>
                {introTiles.map((item)=>(
                    <li className="intro-content__item">
                        <div className="intro-content__title" >{item.title}</div>
                        <div className="intro-content__text" >{item.content}</div>
                        <LinkProduct name="More Info"></LinkProduct>
                    </li>
                ))}
            </ul>
        </section>
    )
}