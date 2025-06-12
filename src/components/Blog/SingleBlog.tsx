import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, previewImage, paragraph, tags, slug } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/blogs/${slug}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <Image 
              src={previewImage || '/images/placeholder.jpg'}
              alt={title || 'Blog post image'}
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/blogs/${slug}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary font-helvetica"
            >
              {title.length > 40 ? `${title.substring(0, 40)}...` : title}
            </Link>
          </h3>
          <p className="text-sm font-medium text-gray-700 font-helvetica leading-relaxed">
            {paragraph.length > 85 ? `${paragraph.substring(0, 85)}...` : paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;