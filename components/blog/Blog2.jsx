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
    <div div className="row md:text-center">
      {articles.slice(0, 5).map((item) => (
        
          <div className="col-lg-3 col-6 px-2 mx-0">
            <Link
              href={`/blog/${item.slug}`}
              className=""
            >
              <div className="blogCard__image rounded-4  col-12 card-article">
                <Image
                  width={250}
                  height={250}
                  style={{ aspectRatio:'16/9', objectFit:'cover' }}
                  className="aspect-video w-100"
                  src={item.media[0].original_url}
                  alt="image"
                  unoptimized
                />
                <div className="p-2">
                  <div className="text-15 text-light-1">
                  {new Date(item.created_at).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                  </div>
                  <h3 className="text-16 text-dark-1 mt-10 md:mt-5">
                    {item.name}
                  </h3>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="fw-bold text-primary mt-3"
                  >
                    More <i className="bi bi-arrow-right-circle"></i>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default Blog2;
