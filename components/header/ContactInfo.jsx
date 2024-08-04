const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Whatsapp",
      action: "+(62) 82155144449",
      text: "+(62) 82155144449",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:hai@smartway.tours",
      text: "hai@smartway.tours",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
