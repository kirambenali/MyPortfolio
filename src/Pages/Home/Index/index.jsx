import AboutMe from "../AboutMe/AboutMe";
import HeroSection from "../HeroSection/HeroSection";
import MyPortfolio from "../Projects";
import Myskills from "../Skills";
import Experience from "../Experience/Experience";
import ContactMe from "../ContactMe";
import Footer from "../Footer"
export default function Home (){
    return ( <>
<HeroSection/>
<AboutMe/>
<Experience/>
<Myskills/>
<MyPortfolio/>
<ContactMe/>
<Footer/>
    </> );
}