import logo from '/logo.png';

export default function App() {
  return (
    <main className="wrapper">
      <div className="card">
        <img src={logo} alt="ByteStay logo" className="logo" />
        <h1 className="title">ByteStay</h1>
        <p className="subtitle">em desenvolvimento</p>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} ByteStay
      </footer>
    </main>
  );
}