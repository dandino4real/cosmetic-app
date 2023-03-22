import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/pngegg (12).png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import {motion} from "framer-motion";

const Hero = () => {
    const transition = {duration: 3, type: "spring"}
    //framer motion(framer.com)
  return (
    <div className={css.container}>

      {/* Left Side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced
          </span>
        </div>
      </div>
      {/* Left Side */}

      {/* Middle Side Hero Image */}
      <div className={css.wrapper}>

      {/* Blue Circle */}
        <motion.div
        initial={{bottom: "2rem"}}
        whileInView={{bottom: "0rem"}}
        transition={transition}
        className={css.blueCircle}
        >
        </motion.div>


        {/* Hero Image */}
        <motion.img 
        transition={transition}
        initial={{bottom: "-2rem"}}
        whileInView={{bottom: "0rem"}}
        src={HeroImg} alt="" 
        width={600} />

        {/* cart Div Animating */}
        <motion.div 
        transition={transition}
        initial={{right: "4%"}}
        whileInView={{right: "0%"}}
        
        className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
          <BsArrowRight />
            </div>
          </div>
        </motion.div>


      </div>

      {/* middle side */}

      {/* Right Side */}
<div className={css.h_sides}>
    <div className={css.traffic}>
        <span>1.5M</span>
        <span>Monthly Traffic</span>
    </div>

    <div className={css.customers}>
        <span>100K</span>
        <span>Happy Customers</span>
    </div>

</div>

      {/* Right Side */}
    </div>
  );
};

export default Hero;
