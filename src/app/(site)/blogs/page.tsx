import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";

export const metadata: Metadata = {
  title: "Blogs | AI Search Refs",
  description: "Stay updated with our latest insights about AI search engines and brand monitoring strategies.",
};

const BlogsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blogs"
        description="Stay updated with our latest insights about AI search engines and brand monitoring strategies."
      />

      <section className="pt-[120px] pb-[120px] bg-[#F5F5F5]">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage; 