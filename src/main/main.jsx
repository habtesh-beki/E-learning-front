import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainDesktop from "./mainDesktop";
import MainMobile from "./mainMobile";



export default function Main(){

    return (
        <main >
         <MainDesktop />
         <MainMobile />
        </main>
    )
}

