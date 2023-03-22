import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline"


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>



        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>OmoGod</span>
            </div>



            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact US</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>Decagon, 7, ajason way, sango-tedo, lagos. </span>
                    </span>

                    <span className={css.pngLine}>
                        {""}
                        <PhoneIcon className={css.icon} />
                        <a href='tel:+2347051992663'>07051992663 </a>
                    </span>

                    <span className={css.pngLine}>
                        {""}
                        <InboxIcon className={css.icon} />
                        <a href='omogod2smart@gmail.com'>omogod2smart@gmail.com</a>
                    </span>
                </div>
            </div>


            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        Sign In
                    </span>
                </div>
            </div>


            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon} />
                        <a href="/about">About Us
                        </a>
                    </span>
                </div>
            </div>


            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>
<div className={css.copyRight}>
    <span>Copyright ©️2023 by OmoGod, Inc.</span>
    <span>All rights reserved</span>
     </div>
</div>
  )
}

export default Footer;