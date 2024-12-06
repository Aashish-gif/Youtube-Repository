import './Sidemenu.css' 
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'
import img7 from './img7.png'
import img8 from './img8.png'
import img9 from './img9.png'
import img10 from './img10.png'
import img11 from './img11.png'
import img12 from './img12.png'
import img13 from './img13.png'
import img14 from './img14.png'
import img15 from './img15.png'
import img16 from './img16.png'
import img17 from './img17.png'
import img18 from './img18.png'



function Sidemenu() {
 
  const flist=[
    {id: 2, img_url:img4 , text:'Explore'},
    {id: 3, img_url:img5 , text:'Shorts'},
    {id: 4, img_url:img6, text:'Subscription'},
  ]
 
  const slist=[
    {id: 2, img_url:img7 , text:'Library'},
    {id: 3, img_url:img8 , text:'History'},
    {id: 4, img_url:img9, text:'Your videos'},
    {id: 5, img_url:img10, text:'Watch Later'},
    {id: 6, img_url:img11, text:'Liked Videos'},
    {id: 7, img_url:img12, text:'Show More'},
  ]
  const tlist=[
    {id: 2, img_url:img13 , text:'Nadar On THe Go'},
    {id: 3, img_url:img14 , text:'Coke Studio Bangle'},
    {id: 4, img_url:img15, text:'MkBHD'},
    {id: 5, img_url:img16, text:'Figma'},
    {id: 6, img_url:img17, text:'ATC Android To To C...'},
    {id: 7, img_url:img18, text:'Alax.com'},
  ]

  return (
    <>
     <div id="Sidemenu">
     <div id='logo'>
        <div id="ham"><img src={img2} alt="logo" style={{height:"40px" ,width:"40px"}}/> </div>
        <div id="log"><img src={img1} alt="logo" style={{height:"30px" ,width:"140px"}} /></div>
     </div>

     <div id='home'>
      <div id="img"><img src={img3} alt="" /></div>
      <div id='text'>Home</div>
     </div>
    {flist.map((x) => (
    <div key ={x.id} id='homee'>
       <div id="img"><img src={x.img_url} /></div>
        <div id="text">{x.text}</div>
        </div>    
))}

<div id="hr"><hr /></div>

{slist.map((x) => (
    <div key ={x.id} id='homee'>
       <div id="img"><img src={x.img_url} /></div>
        <div id="text">{x.text}</div>
        </div>    
))}
   <div id="hre"><hr /></div>
   <div id='sub'>SUBSCRIPTIONS</div>
   {tlist.map((x) => (
    <div key ={x.id} id='homee'>
       <div id="img"><img src={x.img_url} /></div>
        <div id="text">{x.text}</div>
        </div>    
))}
</div>
    </>
  )
}

export default Sidemenu