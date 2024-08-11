import { categories } from "../../assets/Data/CategoriesData"
import { newArrivalsData } from "../../assets/Data/NewArrivalsData"
import Affirmations from "../Affirmations/Affirmations"
import BannerCarousel from "../BannerCarousel/BannerCarousel"
import { Card } from "../Card/Card"

export const CentralBody = (props)=>{
    // TODO configurable loop can be used here
    return (
        <div className="flex flex-row flex-wrap ">
            <BannerCarousel  sectionClassName={"mt-10 platform-gradient-main shadow-3xl"} sectionTitle={"New Arrivals"} cardsData={newArrivalsData}/>
            <BannerCarousel sectionClassName={"mt-10 platform-gradient-main shadow-3xl"} sectionTitle={"Shop By categories"} cardsData={categories}/>
            <Affirmations />
            {/* <img src="/src/assets/images/swappy-20240807_120722.png" /> */}
        </div>
    )
}