const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: " Smartway Indonesia",
      action: "hai@smartway.tours",
      text: "+(62) 82155144449",
      ig: "@smartway.id",
    },
    {
      id: 2,
      title: "Smartway International",
      action: "info@smartway.tours",
      text: "+(62) 82141950677",
      ig: "@smartway.tours",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30 fw-bold"}>{item.title}</div>
          <p>
            {item.ig}
          </p>
          <p>
            {item.action}
          </p>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>

        </div>
      ))}
    </>
  );
};

export default ContactInfo;
