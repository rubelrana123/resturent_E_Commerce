 import bannerImage from "../../../assets/shop/banner2.jpg";
import SectionBanner from "../../../components/Reuseable/SectionBanner/SectionBanner";
import Subtitle from "../../../components/Reuseable/Subtitle/Subtitle";
 
// import orderCoverImg from '../../../assets/shop/order.jpg'
 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopTabs from "../ShopTab/ShopTabs";
import UseMenu from "../../../hooks/Usemenu";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <SectionBanner title = "Our Shop"  subtitle = "lets start your favourite" bannerImage = {bannerImage} ></SectionBanner>
             <Subtitle heading ="our shop" subheading = "hello shop"></Subtitle>
             <div>
             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center py-3 flex-wrap gap-2">
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soaups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                    </TabList>

                <TabPanel  >
                 <ShopTabs items={salad}></ShopTabs>
                </TabPanel>
                <TabPanel>
                <ShopTabs items={pizza}></ShopTabs>
                </TabPanel>
                <TabPanel>
                <ShopTabs items={soup}></ShopTabs>
                </TabPanel>
                <TabPanel>
                <ShopTabs items={desserts}></ShopTabs>
                </TabPanel>
                <TabPanel>
                <ShopTabs items={drinks}></ShopTabs>
                </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;