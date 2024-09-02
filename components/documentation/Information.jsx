import React, { useState } from 'react';

function Information() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "What do I need to hire a car?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "How old do I have to be to rent a car?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "Can I book a hire car for someone else?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "How do I find the cheapest car hire deal?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "What should I look for when I'm choosing a car?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.`,
    },
  ];

  return (
    <div>
      <h3 className="fw-bold mt-50 mb-10">Useful information</h3>
      {faqContent.map((item) => (
        <div className="col-12 mt-10" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                {/* Icon will be minus if the accordion is open, otherwise plus */}
                <i className={activeId === item.id ? "icon-minus" : "icon-plus"} />
              </div>
              <div className="button text-dark-1 text-start">{item.title}</div>
            </div>
            {/* End accordion button */}
            <div
              className={`accordion-collapse ${activeId === item.id ? 'show' : 'collapse'}`}
              id={item.collapseTarget}
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.content}</p>
              </div>
            </div>
            {/* End accordion content */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Information;
