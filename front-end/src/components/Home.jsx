// import './Home.css';
// import FeedData from './FeedData';

// const Home = () => {

//     return (
//         <div className="container">
//             <div className="col-1">
//               <div className="header">
//                    <h1>Home</h1>
//                 <button id="adopt-birds">Adpot</button>
//             </div>

//               <>
//  {FeedData.map((item, index) => (
//   <div key={index} className="grid">
//     <div className="item left">
//       <img src={item.image} alt={`Image ${index}`} />
//     </div>
//     <div className="item upper_right">
//       <img src={item.image} alt={`Image ${index}`} />
//     </div>
//     <div className="item lower_right">
//       <img src={item.image} alt={`Image ${index}`} />
//     </div>
//   </div>
//   <div className="feed-text">
//     <div className="feed-header">
//       <p className="feed-title">{item.title}</p>
//       <p className="feed-time">. {item.time}</p>
//     </div>
//     <div className='feed-description'>
//       <p className="feed-content">
//         {item.description}
//       </p>
//     </div>
//   </div>
// ))}
// </>
//  {/* <div class="grid">
//   <div class="item left">
//     <img src={"https://s3-alpha-sig.figma.com/img/b957/2b7b/7e140c3d4688e5cccafb4ebe51e9f9ee?Expires=1693180800&Signature=XYoR~tFpEFkwQGshXQ4qeH88qVhRNxvFvb42Km9lLUoNMoFVMFylA7-jQlS9UOq4GQsZh-pLKMwY1SVBEaeyuVtneViDKM8uWzh~QTGCsk4aY7bdvZK4Ptih8da8XLCJQjLWKCFhlZWt39xVQwNppVpYHtkD3SGjquRDZhlLi365juv8E0EG63NstK9uKsv-aoNMf3Sux7lzfE1slr11OILqQQAGYqGrdtpxhTmwaDITZ9~COv1SdR7fOGreUwOb~7hLQQg74pibzc0TYVMm6FiTUM7pJXVjmR-S8cOgdI8PXsstICzRUH97w996PiJYlfH53tUs~j03gJVn-gatmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
//   </div>
//   <div class="item upper_right">
//     <img src={"https://s3-alpha-sig.figma.com/img/b957/2b7b/7e140c3d4688e5cccafb4ebe51e9f9ee?Expires=1693180800&Signature=XYoR~tFpEFkwQGshXQ4qeH88qVhRNxvFvb42Km9lLUoNMoFVMFylA7-jQlS9UOq4GQsZh-pLKMwY1SVBEaeyuVtneViDKM8uWzh~QTGCsk4aY7bdvZK4Ptih8da8XLCJQjLWKCFhlZWt39xVQwNppVpYHtkD3SGjquRDZhlLi365juv8E0EG63NstK9uKsv-aoNMf3Sux7lzfE1slr11OILqQQAGYqGrdtpxhTmwaDITZ9~COv1SdR7fOGreUwOb~7hLQQg74pibzc0TYVMm6FiTUM7pJXVjmR-S8cOgdI8PXsstICzRUH97w996PiJYlfH53tUs~j03gJVn-gatmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
//   </div>
//   <div class="item lower_right">
//     <img src={"https://s3-alpha-sig.figma.com/img/b957/2b7b/7e140c3d4688e5cccafb4ebe51e9f9ee?Expires=1693180800&Signature=XYoR~tFpEFkwQGshXQ4qeH88qVhRNxvFvb42Km9lLUoNMoFVMFylA7-jQlS9UOq4GQsZh-pLKMwY1SVBEaeyuVtneViDKM8uWzh~QTGCsk4aY7bdvZK4Ptih8da8XLCJQjLWKCFhlZWt39xVQwNppVpYHtkD3SGjquRDZhlLi365juv8E0EG63NstK9uKsv-aoNMf3Sux7lzfE1slr11OILqQQAGYqGrdtpxhTmwaDITZ9~COv1SdR7fOGreUwOb~7hLQQg74pibzc0TYVMm6FiTUM7pJXVjmR-S8cOgdI8PXsstICzRUH97w996PiJYlfH53tUs~j03gJVn-gatmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
//   </div>
// </div>

// <div className="feed-text">
//   <div className="feed-header">
//     <p className="feed-title">Migrating</p>
//     <p className="feed-time">. 30 mins ago</p>
//   </div>
//   <div className='feed-description'>
//     <p className="feed-content">
//  Betty were moving along the "Avian Migration Route," possibly heading south for the winter.
//     </p>
//   </div>
// </div>

//  <div class="grid">
//   <div class="item left">
//     <img class="item left" src={"https://s3-alpha-sig.figma.com/img/df32/47a6/d5a3d50e77327647568af0d1d436028c?Expires=1693180800&Signature=O2E1FWmYdUK305yKcQItM0gTaoFbf1sE5HY0ahqtGkr-gXkQtLa~~Tttji6hzMcHUfbl9f64TT6l34oUorD5uHAc3fh9uvJtrQ4l9mXlIQsXcrWGycBieOkQAjldcTH0d-QkfrmGzwToCGFxEZEzoZn15HM0A3lkf-XGZGQ-RPPtzUQ~Kkzdf~dhyE-adTmHM8C0x48B1xmjojFYdvNiHUs3pMoitfwd32RVMr0jH2vTmlQzW3FA0Y95~eIqYaeICHtTVzRgWEE9q5pILMI0Eczl69SzUh8mpueYaRVKMV7JtOo-7MEDzyJz~AFJYk8pXsw7cBSlIVx4eJQ3QgGeRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
//   </div>
//   <div class="item upper_right">
//     <img class="item left" src={"https://s3-alpha-sig.figma.com/img/df32/47a6/d5a3d50e77327647568af0d1d436028c?Expires=1693180800&Signature=O2E1FWmYdUK305yKcQItM0gTaoFbf1sE5HY0ahqtGkr-gXkQtLa~~Tttji6hzMcHUfbl9f64TT6l34oUorD5uHAc3fh9uvJtrQ4l9mXlIQsXcrWGycBieOkQAjldcTH0d-QkfrmGzwToCGFxEZEzoZn15HM0A3lkf-XGZGQ-RPPtzUQ~Kkzdf~dhyE-adTmHM8C0x48B1xmjojFYdvNiHUs3pMoitfwd32RVMr0jH2vTmlQzW3FA0Y95~eIqYaeICHtTVzRgWEE9q5pILMI0Eczl69SzUh8mpueYaRVKMV7JtOo-7MEDzyJz~AFJYk8pXsw7cBSlIVx4eJQ3QgGeRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
//   </div>
//   <div class="item lower_right">
//     <img class="item left" src={"https://s3-alpha-sig.figma.com/img/df32/47a6/d5a3d50e77327647568af0d1d436028c?Expires=1693180800&Signature=O2E1FWmYdUK305yKcQItM0gTaoFbf1sE5HY0ahqtGkr-gXkQtLa~~Tttji6hzMcHUfbl9f64TT6l34oUorD5uHAc3fh9uvJtrQ4l9mXlIQsXcrWGycBieOkQAjldcTH0d-QkfrmGzwToCGFxEZEzoZn15HM0A3lkf-XGZGQ-RPPtzUQ~Kkzdf~dhyE-adTmHM8C0x48B1xmjojFYdvNiHUs3pMoitfwd32RVMr0jH2vTmlQzW3FA0Y95~eIqYaeICHtTVzRgWEE9q5pILMI0Eczl69SzUh8mpueYaRVKMV7JtOo-7MEDzyJz~AFJYk8pXsw7cBSlIVx4eJQ3QgGeRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}/>
//   </div>
// </div>

// <div className="feed-text">
//   <div className="feed-header">
//     <p className="feed-title">Riverside-ing</p>
//     <p className="feed-time">. 2 hours ago</p>
//   </div>
//   <div className='feed-description'>
//     <p className="feed-content">
//     Betty were near “Tranquil River”, likely searching for water and food resources.
//     </p>
//   </div>
// </div>  } */}

// </div>

//  <div class="col-2">

//  <span>Bird's Acitivity</span>

// <Acitivity/>
//             </div>


//         </div>

//     )

// };

// export default Home;
import React from 'react';
import './Home.css';
import { FeedData } from './FeedData';
import Acitivity from './Activity';
import { BorderOutlined } from '@ant-design/icons';


const Home = () => {
  return (
    <div className="container">
      <div className="col-1">
        <div className="header">
          <h1>Home</h1>
          <button id="adopt-birds">Adopt</button>
        </div>
        {FeedData.map((item, index) => (
          <>
            <div key={index} className="grid">
              <div className="item left">
                <img src={item.image} alt={`Image ${index}`} style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
              </div>
              <div className="item upper_right">
                <img src={item.image} alt={`Image ${index}`} style={{ borderTopRightRadius: '10px' }} />
              </div>
              <div className="item lower_right">
                <img src={item.image} alt={`Image ${index}`} style={{ borderBottomRightRadius: '10px' }} />
              </div>
            </div>
            <div className="feed-text">
              <div className="feed-header">
                <p className="feed-title">{item.title}</p>
                <p className="feed-time">. {item.time}</p>
              </div>
              <div className='feed-description'>
                <p className="feed-content">
                  {item.description}
                </p>
              </div>
            </div>
          </>
        ))}

      </div>

      <div className="col-2">
        <span style={{ fontSize: '25px' }}>Bird's Activity</span>
        <Acitivity />
      </div>
    </div>
  );
};

export default Home;

