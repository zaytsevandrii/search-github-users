import './App.scss';

function App() {
  return (
  <>
  <form className="user-form">
    <input type="text" id='search' placeholder='Search a Github user' />
  </form>
  <main id="main">
    <div className="card">
      <div>
        <img src="https://randomuser.me/api/portraits/men/30.jpg" className='avatar' alt="" />
      </div>
      <div className="user-info">
        <h2>John Doe</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur nam explicabo, iure similique neque.</p>

        <ul>
          <li>300 <strong>Followers</strong></li>
          <li>100 <strong>Following</strong></li>
          <li>30 <strong>Repos</strong></li>
        </ul>

        <div id="repos">
          <a href="#" className='repo'>Repo 1</a>
          <a href="#" className='repo'>Repo 2</a>
          <a href="#" className='repo'>Repo 3</a>
        </div>
      </div>
    </div>
  </main>
  </>
  );
}

export default App;
