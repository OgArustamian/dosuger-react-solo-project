function BurgerMenu() {

  const styles = {
    borderBottom: '2px solid black',
    width: '120px',
    margin: '0 auto',
    color: 'black',
    marginBottom: '10px',
    textAlign: 'center',
  }
  
  return (
    <div className="collapse" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4 style={styles}>О сайте</h4>
            <p className="header-description">
              Если вам нечем заняться вечером и вы задумались, чтобы такого посмотреть, воспользуйтесь чудо рандомайзером.
            </p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4 style={styles}>Контакты</h4>
            <ul className="list-unstyled">
              <li>
                <a className="text-white">Твиттер</a>
              </li>
              <li>
                <a className="text-white">
                  Facebook (признана экстремистской на территории РФ)
                </a>
              </li>
              <li>
                <a className="text-white">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu
