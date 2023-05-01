import './Section.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardProject from './CardProject';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Section = (props) => {
  const { sectionType, userId } = props;
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const loadInfo = async () => {
      setLoading(true);
      const location = 'https://buildmeacv.tech/'+ sectionType+ '/' + 'user_id=' + userId;
      // const location = 'http://localhost:8000/'+ sectionType+ '/' + 'user_id=' + userId;
      const response = await axios.get(location);
      setInfo(response.data);
      setLoading(false);
    }
    loadInfo();
  }, [sectionType, userId]);
  return (
    <div className="Section">
      {loading ?
      (<p>Loading...</p>) :
      (<div>
        <h1 >{capitalizeFirstLetter(sectionType)}</h1>
        {info.map(
        (item) =>
        <div key={item.title}>
        <CardProject 
          imageSrc={item.main_img} 
          heading={item.title} 
          subHeading={item.sub_heading} 
          description={item.long_desc}
        />
        </div> 
      )}
      </div>
      )
      }
      
    </div>
  );
}

export default Section;
