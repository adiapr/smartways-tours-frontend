const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Alamat",
      content: (
        <>Jalan Nakula 51 Tumpang, kab Malang, Indonesia 65156</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Toll Free Customer Care",
      content: (
        <>
          <a href="tel:+62341788733"> +62 341 - 788733</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Ingin bangtuan secara langsung?",
      content: (
        <>
          {" "}
          <a href="mailto:hai@smartway.tours">hai@smartway.tours</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
