import './App.css';
import Section from './Section';

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
