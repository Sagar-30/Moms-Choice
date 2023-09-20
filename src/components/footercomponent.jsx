import './footercomponent.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer(){
    return(
        <footer className='Main-footer'>
            <div className='footer-img-section'>
                <img src="/logo-no-background.png" alt="footer" />
                </div>
                <div className='footer-contact-section'>
                <p>Kindly contact Us On - </p>
                <p><i class="bi bi-telephone-fill"></i> +91-9662950199<br/> +91-9824406620</p>
                <p><i class="bi bi-envelope"></i>   raj.rk.rb@gmail.com</p>
                <p>Follow us on- </p>
                <i class="bi bi-facebook iconsall"></i>
                <i class="bi bi-instagram iconsall"></i>
                <i class="bi bi-twitter iconsall"></i>
                </div>
            </footer>
    )
}
