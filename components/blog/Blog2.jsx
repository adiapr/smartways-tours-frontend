"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog2 = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`);
        const result = await response.json();
        if (Array.isArray(result.data)) {
          setArticles(result.data);
        } else {
          console.log('Unexpected data format:', result);
        }
      } catch (error) {
        console.log('Gagal ambil data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {articles.slice(0, 5).map((item) => (
        <Link
          href={`/blog/${item.slug}`}
          className="blogCard -type-1 col-12"
          key={item.id}
        >
          <div className="row y-gap-15 items-center md:justify-center md:text-center">
            <div className="col-lg-4">
              <div className="blogCard__image rounded-4">
                <Image
                  width={250}
                  height={250}
                  className="cover w-100 img-fluid"
                  src={item.media[0].original_url}
                  alt="image"
                  unoptimized
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-15 text-light-1">{new Date(item.created_at).toLocaleDateString()}</div>
              <h3 className="text-22 text-dark-1 mt-10 md:mt-5">
                {item.name}
              </h3>
              <div className="text-15 lh-16 text-light-1 mt-10 md:mt-5">
                {item.caption}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Blog2;
