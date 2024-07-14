"use client";
import Image from "next/image";
import blogsData from "../../../data/blogs";
import { useEffect, useState } from "react";

const RelatedBlog = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`);
        const result = await response.json();

        setArticle(result.data);
      } catch (error) {
        console.log('Error saat ambil data ', error);
      }
    };
    console.log(article);
    fetchArticle();
  }, []);

  return (
    <>
      {article.slice(0, 4).map((item) => (
        <div className="col-lg-3 col-sm-6" key={item.id}>
          <a
            href={`/blog/${item.slug}`}
            className="blogCard -type-2 d-block bg-white rounded-4 shadow-4"
          >
            <div className="blogCard__image">
              <div className="rounded-4">
                <Image
                  width={400}
                  height={300}
                  className="cover w-100 img-fluid"
                  style={{ aspectRatio:'16/9', objectFit:'cover' }}
                  src={item.media[0].original_url}
                  alt="image"
                  unoptimized
                />
              </div>
            </div>
            <div className="px-20 py-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.name}</h4>
              <div className="text-light-1 text-15 lh-14 mt-10">
                {new Date(item.created_at).toLocaleDateString()}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default RelatedBlog;
