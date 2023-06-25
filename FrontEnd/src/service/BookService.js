import axios from "axios";
class BookService {
  postBook = async (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post('saveBook', data)
        .then((res) => {
            return resolve(res)
        })
        .catch((err) => {
            return resolve(err)
        })
    });

    return await promise 
  };
}
export default new BookService();
