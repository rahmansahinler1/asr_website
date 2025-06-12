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
          {/* Main Header - Canela font, 48px, bold with gold highlight */}
          <h2 className="mb-6 font-canela font-bold text-black leading-tight" style={{ fontSize: '48px' }}>
            Our Latest <span className="text-[#FFD66B]">Blog Posts</span>
          </h2>
          
          {/* Description - Helvetica Neue, 16px, 28px line height */}
          <p className="font-helvetica text-black max-w-[600px]" style={{ fontSize: '16px', lineHeight: '28px' }}>
            Stay updated with insights about AI search tracking, brand monitoring strategies, and the latest developments in AI-powered search technologies.
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
