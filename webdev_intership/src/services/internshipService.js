import axios from 'axios';

const getAllInternships = async () => {
  try {
    const response = await axios.get('/api/internships')
    return response.data
    // return axios.get('/api/internships').then(response => response.data)
  } catch (e) {
    console.log(error.response.data)
    return error.response.data
  }
}

const internshipService = { getAllInternships };

export default internshipService;
