export default function ProductSlider() {

    const products = [
        {
            name: 'Chair',
            active: true
        },
        {
            name: 'Beds',
            active: false
        },
        {
            name: 'Sofa',
            active: false
        },
        {
            name: 'Lamp',
            active: false
        },
    ];

    return (
            <ul className="product-slider">
                {products.map((item)=>(
                    <li className={`product-slider__item ${item.active ? 'active' : ""}`}>{item.name}</li>
                ))}
            </ul>
    )
}