"use client";
import { useEffect, useState } from "react";

const Faq = async () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faq-doc`);
        const data = await response.json();
        setData(data);

      } catch (error) {
        console.log('Err : ', error)
      }
    };
    fetchFaq();
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="bi bi-arrows-angle-contract" />
                <i className="bi bi-arrows-angle-expand" />
              </div>
              <div className="button text-dark-1 text-start fw-bold">{item.category}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.id}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <div className="article">
                  <p className="text-15" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
