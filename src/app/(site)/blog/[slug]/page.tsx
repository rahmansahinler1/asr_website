import { notFound } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import Image from "next/image";

const SingleBlogPage = ({ params }: { params: { slug: string } }) => {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  // Split sections for positioning the image in the middle
  const midPoint = Math.ceil(blog.sections.length / 2);
  const firstHalfSections = blog.sections.slice(0, midPoint);
  const secondHalfSections = blog.sections.slice(midPoint);

  return (
    <>
      {/* Navigation background - Primary color section */}
      <section className="h-[100px] bg-primary"></section>
      
      {/* Content section */}
      <section className="pb-[120px] pt-[50px] bg-[#F5F5F5]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h1 className="mb-8 text-4xl font-bold leading-tight text-black font-canela">
                {blog.title}
              </h1>
              
              <div className="mb-10 text-lg font-medium leading-relaxed text-gray-700 font-helvetica">
                {blog.introText}
              </div>

              {/* First half of sections */}
              {firstHalfSections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="mb-6 text-2xl font-bold text-black font-canela">
                    {section.header}
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700 font-helvetica">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Full image positioned in the middle */}
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

              {/* Second half of sections */}
              {secondHalfSections.map((section, index) => (
                <div key={index + midPoint} className="mb-10">
                  <h2 className="mb-6 text-2xl font-bold text-black font-canela">
                    {section.header}
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700 font-helvetica">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SingleBlogPage;