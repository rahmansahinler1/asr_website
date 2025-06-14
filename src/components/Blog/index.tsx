import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-12 md:py-16 lg:py-20 bg-[#F5F5F5]"
    >
      <div className="container">
        {/* Header Section - Left aligned like About sections */}
        <div className="mb-12">
          {/* Main Header - Responsive font sizes with gold highlight */}
          <h2 className="mb-6 font-canela font-bold text-black leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Latest <span className="text-[#FFD66B]">Blogs</span>
          </h2>
          
          {/* Description - Responsive font sizes */}
          <p className="font-helvetica text-black max-w-[600px] text-sm sm:text-base leading-relaxed">
          Read about research findings, AI monitoring techniques, and data-driven insights from tracking brand performance across AI platforms
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
