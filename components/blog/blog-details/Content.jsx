"use client";
import React, { useEffect, useState } from 'react'
import DetailsContent from './DetailsContent'

function Content({ slug }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article/${slug}`);
                // console.log(response);
                const data = await response.json(); 
                setArticle(data);
                // console.log('API Response:', data); 
            } catch (error) {
                console.log('Gagal ambil data', error);
            }
        }

        if (slug) {
            fetchArticle();
        }
    }, [slug])

    // console.log(article)

    if (!article) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-40 justify-center text-center">
                        <div className="col-auto">
                            <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                                {article?.category}
                            </div>
                            <h1 className="text-30 fw-600">{article?.name}</h1>
                            <div className="text-15 text-light-1 mt-10">{new Date(article.created_at).toLocaleDateString()}</div>
                        </div>
                        <div className="col-12">
                            <img
                                src={article?.media[0].original_url}
                                alt={article?.name}
                                className="col-12 rounded-8 w-100"
                                style={{ aspectRatio:'16/5', objectFit:'cover' }}
                            />
                        </div>
                    </div>
                    {/* End .row top bar image and title */}

                    <div className="row y-gap-30 justify-center">
                        <div className="col-xl-8 col-lg-10 layout-pt-md">
                            <h3 className="text-20 fw-500">{article.name}</h3>
                            <div className="artikel" dangerouslySetInnerHTML={{ __html: article.body }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content
