export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p>© {new Date().getFullYear()} Kevin Alvarado Cornejo</p>
        <p>Portfolio built with React, TypeScript and accessibility best practices.</p>
      </div>
    </footer>
  );
}
