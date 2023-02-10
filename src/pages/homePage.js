import React from 'react';
import TopPart from '../components/TopPart/index';
import MainPart from '../components/MainPartHP'
import BottomPartHP from '../components/BottomPartHP/index';
import Footer from '../components/Footer'
import Shelves from '../components/Shelves/index';
import ScrollCheck from '../components/Slider';
import News from '../components/News';
import FooterNav from '../components/FooterNav';



const HomePage = ({onAddDetyl, setDeteylItems,DeteylItems}) => {
  return (
    <div>
      <TopPart/>
      <Shelves onAddDetyl={onAddDetyl} setDeteylItems={setDeteylItems} DeteylItems={DeteylItems} />
      <News/>
      <ScrollCheck/>
      <MainPart/>
    
      <BottomPartHP/>
      <FooterNav/>
      <Footer/>
    </div>
  )
}

export default HomePage