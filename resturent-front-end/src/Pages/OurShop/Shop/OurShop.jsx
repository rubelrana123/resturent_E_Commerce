 import bannerImage from "../../assets/shop/banner2.jpg"
import SectionBanner from "../../../components/Reuseable/SectionBanner/SectionBanner";
import Subtitle from "../../../components/Reuseable/Subtitle/Subtitle";
 
import orderCoverImg from '../../../assets/shop/order.jpg'
 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopTabs from "../ShopTab/ShopTabs";

const OurShop = () => {
    return (
        <div>
            <SectionBanner title = "Our Shop"  subtitle = "lets start your favourite" bannerImage = {bannerImage} ></SectionBanner>
             <Subtitle heading ="our shop" subheading = "hello shop"></Subtitle>
             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
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
    );
};

export default OurShop;