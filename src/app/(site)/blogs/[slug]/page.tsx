import { Metadata } from "next";
import { notFound } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogData.find((blog) => blog.slug === params.slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found | AI Search Refs",
    };
  }

  return {
    title: `${blog.title} | AI Search Refs`,
    description: blog.paragraph,
  };
}

const SingleBlogPage = ({ params }: { params: { slug: string } }) => {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        pageName={blog.title}
        description="Read our latest insights about AI search engines and brand monitoring"
      />
      
      <section className="pb-[120px] pt-[120px] bg-[#F5F5F5]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight font-canela">
                  {blog.title}
                </h1>
                
                <div className="mb-10 flex flex-wrap items-center border-b border-gray-300 pb-4">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={blog.author.image}
                            alt="author"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 text-base font-medium text-primary font-helvetica">
                          By <span>{blog.author.name}</span>
                        </h4>
                        <p className="text-xs text-gray-600 font-helvetica">{blog.author.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="blog-content">
                  <div className="mb-10 text-base font-medium leading-relaxed text-gray-700 font-helvetica">
                    {blog.introText}
                  </div>

                  <div className="content mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={blog.fullImage}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority={true}
                      />
                    </div>
                  </div>
                  
                  <div className="prose max-w-none text-base font-medium leading-relaxed text-gray-700 font-helvetica">
                    {blog.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage; 