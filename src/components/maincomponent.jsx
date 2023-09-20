import react, { useState } from 'react'
import './maincomponent.css'
import Carousel from './carouselcomponent'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Mainbody() {

    const [data, getdata] = useState([
        { "id": 1, "price": "500", "name": "pink chanyacholi hi toh hai na", "img": ['/test.png', '/test1.png'] },
        { "id": 2, "price": "500", "name": "pink chanyacholi", "img": ['/test1.png', '/test1.png'] },
        { "id": 3, "price": "500", "name": "pink chanyacholi", "img": ['/test.png', '/test1.png'] },
        { "id": 5, "price": "500", "name": "pink chanyacholi", "img": ['/test.png', '/test1.png'] },
        { "id": 6, "price": "500", "name": "pink chanyacholi", "img": ['/test.png', '/test1.png'] }
    ])

    const [carouselClick, setcarouselClick] = useState();   // to get id of clicked img
    const [Clickimg, setClickimg] = useState();

    const [Display, setdisplay] = useState();

    function Togglebutton(e) {
        setcarouselClick(e.currentTarget.id)
        if (Display == 'unset') {
            setdisplay('none')
        }
        else {
            setdisplay('unset')
        }

    }
    console.log(`Clicked element ID: ${carouselClick}`);

    return (
        <section>
            <div className='Main-section-top'>
                <img src="https://ik.imagekit.io/wb2spwtue/kreeva/media/wysiwyg/CategoryBlock/LehangaCholi/may/Lehenga_Choli.jpg" alt="Main-image" />
            </div>
            {
                data.map(Everydata => (
                    <>
                        <div className='fullCard'>
                            <div key={Everydata.id} id={Everydata.id} onClick={Togglebutton} className='Main-Card'>
                                <img className='main-card-image' src={Everydata.img[0]} alt='product.title' />
                                <h1>{Everydata.name}</h1>
                                <p>Price: {Everydata.price}</p>
                                <p>{Everydata.img[0]}</p>
                                {/* <p>{Everydata.id}</p> */}
                            </div>
                        </div>


                    </>

                )
                )}

            {
                data.map(Eachphoto => (
                    Eachphoto.id == carouselClick && (
                        <div key={Eachphoto.id} style={{ display: Display }} className='Carousel-main'>
                            <Carousel img1={Eachphoto.img[0]}
                                img2={Eachphoto.img[1]}
                                img3='https://github.com/Sagar-30/Tech-gig/blob/main/logo-white.png?raw=true' />
                            <i className="bi bi-x-octagon-fill Cut-button" onClick={Togglebutton}></i>
                        </div>
                    )
                ))
            }
        </section>
    )
}