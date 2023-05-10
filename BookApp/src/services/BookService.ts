import axios from 'axios';
import { Book } from '../models/Book';

const API_URL = 'http://openlibrary.org/search.json?limit=500&q=The+Hunger+Games'

export default {
  fetchBooks: async (): Promise<Book[]> => {
    console.log('book service called');
    const response = await axios.get(API_URL);
    console.log('book service success response');
    return response.data.docs.map((doc: any) => ({
      id: doc.key,
      title: doc.title,
      author: doc.author_name ? doc.author_name[0] : '',
      imageUrl: `http://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`,
    }));
  },
};

