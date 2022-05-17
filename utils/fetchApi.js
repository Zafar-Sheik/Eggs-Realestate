import axios from "axios";


  export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async(url) => {
      const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '1b4c8c78cfmshd4d63499d5bdd70p1bd136jsnb06b6c9992aa'
          }

      });

      return data;
  }