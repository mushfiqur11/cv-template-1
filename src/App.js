import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import CardProject from './CardProject';
import Section from './Section';
  
//   // const [userId, setUserId] = useState(null);
//   // const [loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   async function fetchUserId() {
//   //     setLoading(true);
//   //     try {
//   //       const response = await fetch('userId.json');
//   //       const jsonData = await response.json();
//   //       setUserId(jsonData);
//   //       console.log(userId)
//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   }
//   //   fetchUserId();
//   // }, []);

// const App = () => {

//   const userId="4407bc65-0f1a-425d-b280-23b086a39ee8";



//   return <div>
//       <Section sectionType='projects' userId={userId}></Section>
//         <Section sectionType='work' userId={userId}></Section>
//         <Section sectionType='education' userId={userId}></Section>
//     </div>
// }
// export default App;



const App = () => {

  const userId = process.env.REACT_APP_USER_ID;

  console.log(`This is a new run`);
  // console.log(userId);
  
  // const [userId, setUserId] = useState(null);

  //   useEffect(() => {
  //     async function fetchUserId() {
  //       try {
  //         const response = await fetch('userId');
  //         const jsonData = await response.json();
  //         setUserId(jsonData.userId);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //     fetchUserId();
  //   }, []);

    return (
      <div>
        {userId && (
          <div>
            <Section sectionType='projects' userId={userId} webAddress='https://buildmeacv.tech'></Section>
            <Section sectionType='work' userId={userId} webAddress='https://buildmeacv.tech'></Section>
            <Section sectionType='education' userId={userId} webAddress='https://buildmeacv.tech'></Section>
          </div>
        )}
      </div>
    );
  }

export default App;
