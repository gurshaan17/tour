import BlogItem from "../components/BlogItem";
import BlogSidebar from "../components/BlogSidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
    return (
        <div>
            <Navbar/>
        <div className="bg-gray-100 min-h-screen p-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-6">
              <div className="w-full lg:w-2/3 p-6">
                <BlogItem />
                <BlogItem />
                <BlogItem />
              </div>
              <BlogSidebar />
            </div>
          </div>
        </div>
        <Footer/>
        </div>
      )
}

export default Blog;