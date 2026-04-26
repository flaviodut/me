export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Flávio Dutra. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
