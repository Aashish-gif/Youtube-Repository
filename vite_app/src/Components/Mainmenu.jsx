
import './Mainmenu.css' 
import img19 from './img19.png'
import img20 from './img20.png'
import img21 from './img21.png'
import img22 from './img22.png'
import img23 from './img23.png'
import img24 from './img24.png'
import img25 from './img25.png'
import img26 from './img26.png'
import img27 from './img27.png'
import img28 from './img28.png'
import img29 from './img29.png'
import img30 from './img33.png'
import img31 from './img34.png'
import img32 from './img35.png'
import img33 from './img36.png'
import img34 from './img37.png'
import img35 from './img38.png'
import img36 from './img39.png'
import img37 from './img40.png'
import img38 from './img30.png'
import img39 from './img31.png'
import img40 from './img32.png'



function Mainmenu() {
    const tnav=[
        {id: 2,  text:'Coke Studio'},
        {id: 3,  text:'Ux'},
        {id: 4,  text:'Case Study'},
        {id: 5,  text:'Music'},
        {id: 6,  text:'Bangla Lofi'},
        {id: 7,  text:'Tour'},
        {id: 8,  text:'Saintmartin'},
        {id: 9,  text:'Tech'},
        {id: 10,  text:'Iphone 18'},
        {id: 11,  text:'User interface Design'},
        {id: 12,  text:'Computation'},
        {id: 13,  text:'Bhajans'},
        {id: 14,  text:'Html'},
        {id: 15,  text:'Intership'},
        {id: 16,  text:'Song'},
        {id: 17,  text:'Podcast'},
        {id: 17,  text:'TRS'},
     
    ]
    const video =[
    {id:1 ,img_url1:img26 ,img_url2:img38,txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla      2 days ago'},
    {id:2 ,img_url1:img27,img_url2:img39,txt1 :'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla       2 days ago'}, 
    {id:3 ,img_url1:img28 ,img_url2:img40,txt1:'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla       2 days ago'},
    {id:4  ,img_url1:img29 ,txt1:'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2:' Coke Studio Bangla            2 days ago'},]
   
    const videos =[
      {id:1 ,img_url1:img30 ,img_url2:img38,txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla      2 days ago'},
      {id:2 ,img_url1:img31,img_url2:img39,txt1 :'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla       2 days ago'}, 
      {id:3 ,img_url1:img32 ,img_url2:img40,txt1:'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla       2 days ago'},
      {id:4  ,img_url1:img33 ,txt1:'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2:' Coke Studio Bangla            2 days ago'},]

      const videoe =[
        {id:1 ,img_url1:img34,img_url2:img38,txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla      2 days ago'},
        {id:2 ,img_url1:img35,img_url2:img39,txt1 :'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla       2 days ago'}, 
        {id:3 ,img_url1:img36,img_url2:img40,txt1:'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2: 'Coke Studio Bangla       2 days ago'},
        {id:4  ,img_url1:img37,txt1:'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita' , txt2:' Coke Studio Bangla            2 days ago'},]
    return(
    <>
  <div>
  <div id='tbar'>
    <div id='searcht'>search</div>
    <div id='search'><img src={img19} alt="" /></div>
    <div id='mic'><img src={img20} alt="" /></div>
    <div id='zic'><img src={img21} alt="" /></div>
    <div id='yic'><img src={img22} alt="" /></div>
    <div id='yic'><img src={img23} alt="" /></div>
    <div id='tic'><img src={img24} alt="" /></div>
  </div>
  <div id="hr"><hr /></div>
  <div id='tnav'>
  <div id='sugo'>All</div>
  {tnav.map((x) => (
    <div key ={x.id} id='suga'>
        <div id="txt">{x.text}</div>
        </div>    
))}
<div id='sa'><img src={img25}alt="" /></div>
  </div>
  <div id="hr"><hr /></div>


<div id='playlist'>
  {video.map((x) =>(
    <div key={x.id} id ='tn'>
    <div id='thumb'> <img src={x.img_url1} alt="" /></div>
      <div id='playtxt'><div id='sty'><img src={x.img_url2} alt="" /></div>
      <div>
       <div id='le'> <h5>{x.txt1}</h5>
        <p>{x.txt2}</p></div>
      </div>
      </div>
      </div>
  ))}
</div>


<div id='playlists'>
  {videos.map((x) =>(
    <div key={x.id} id ='tn'>
    <div id='thumb'> <img src={x.img_url1} alt="" /></div>
      <div id='playtxt'><div id='sty'><img src={x.img_url2} alt="" /></div>
      <div>
       <div id='le'> <h5>{x.txt1}</h5>
        <p>{x.txt2}</p></div>
      </div>
      </div>
      </div>
  ))}
</div>



<div id='playlists'>
  {videoe.map((x) =>(
    <div key={x.id} id ='tn'>
    <div id='thumb'> <img src={x.img_url1} alt="" /></div>
      <div id='playtxt'><div id='sty'><img src={x.img_url2} alt="" /></div>
      <div>
       <div id='le'> <h5>{x.txt1}</h5>
        <p>{x.txt2}</p></div>
      </div>
      </div>
      </div>
  ))}
</div>



 </div> 

 
 
    </>
  )
}

export default Mainmenu