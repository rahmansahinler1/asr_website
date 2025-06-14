import Breadcrumb from "@/components/Common/Breadcrumb";
import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";

const BlogsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Latest Blogs"
        description="Read about research findings, AI monitoring techniques, and data-driven insights from tracking brand performance across AI platforms"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="container">
          {/* Header Section - Matching landing page style */}
          <div className="mb-12">
            <h1 className="mb-6 font-canela font-bold text-black leading-tight" style={{ fontSize: '48px' }}>
              Latest <span className="text-[#FFD66B]">Blogs</span>
            </h1>
            
            <p className="font-helvetica text-black max-w-[600px]" style={{ fontSize: '16px', lineHeight: '28px' }}>
              Stay updated with our latest insights about AI search monitoring, competitive analysis, and data-driven strategies for optimizing your brand's visibility across AI platforms.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Additional Content Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-black font-canela">
                Want to stay updated?
              </h2>
              <p className="text-base text-gray-600 font-helvetica mb-6 max-w-2xl mx-auto">
                Get the latest insights about AI search monitoring and competitive analysis delivered to your inbox. Learn how top brands are adapting to the AI-first search landscape.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-helvetica"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage; 