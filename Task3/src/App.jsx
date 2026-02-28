import React from 'react'
import Card from './components/Card'
import ahmadImage from './images/ahmad.jpeg'
import waqasImage from './images/waqas.jpeg';
import abbasImage from './images/abbas.jpeg';
import amanImage from './images/aman.jpeg'
import sadam from './images/sadam.jpeg'
import shakeel from './images/shakeel.jpeg'
import waseem from './images/waseem.jpeg'
import adil from './images/adil.jpeg'
import arshad from './images/arshad.jpg'




const App = () => {
  return (
    <div className='grid grid-cols-3 gap-[1rem] max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1 p-[1rem]'>
      <Card imageUrl={ahmadImage} name="Ahmad Ali" skill="MERN Stack Developer" likeCount="58.6k" commentCount="15.7k" shareCount="610" />
      <Card imageUrl={waqasImage} name="Waqas Khan" skill="Social Media Marketer" likeCount="60.1k" commentCount="12.3k" shareCount="211"/>
      <Card imageUrl={abbasImage} name="Abbas Khan" skill="Businessman" likeCount="98.2k" commentCount="22.9k" shareCount="12.2k"/>
      <Card imageUrl={amanImage} name="Aman Khan" skill="Backend Developer" likeCount="10k" commentCount="200" shareCount="111"/>
      <Card imageUrl={sadam} name="Sadam Hussain" skill="Web Developer" likeCount="50k" commentCount="10.1k" shareCount="211"/>
      <Card imageUrl={shakeel} name="Shakeel Khan" skill="graphic designer" likeCount="500k" commentCount="44.9k" shareCount="31.1kk"/>
      <Card imageUrl={waseem} name="Waseem Khan" skill="Frontend Developer" likeCount="13k" commentCount="900" shareCount="111"/>
      <Card imageUrl={arshad} name="Arshad Khan" skill="Businessmen" likeCount="12k" commentCount="330" shareCount="120"/>
      <Card imageUrl={adil} name="Adil Khan" skill="Hacker Goru" likeCount="33k" commentCount="11k" shareCount="444"/>
    </div>
  )
}

export default App
