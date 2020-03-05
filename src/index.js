import axios from 'axios';


const getBreeds = async () => {
  try {
    return await axios.get('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=da8a900a121c85c777ee940859e8e3c2');
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const breeds = await getBreeds();
  console.log(breeds);
};

countBreeds();