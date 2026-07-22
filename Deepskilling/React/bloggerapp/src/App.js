import './App.css';

import { books, blogs, courses } from './Data';

import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="container">

      {books.length > 0 ? <BookDetails books={books} /> : null}

      {blogs.length > 0 ? <BlogDetails blogs={blogs} /> : null}

      {courses.length > 0 ? <CourseDetails courses={courses} /> : null}

    </div>
  );
}

export default App;