const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Ukraine, Kyiv</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / Viber</h2>
            <p>
              <a href="tel:+380965985491">(096) 598-54-91</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:work.yevchenko@gmail.com">
                work.yevchenko@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
