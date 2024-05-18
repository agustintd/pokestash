import "@/app/styles/404.css";
export default function NotFound() {
  return (
    // Pagina 404 inspirada en pokemon que use un snorlax durmiendo
    <main className="flex min-h-screen flex-col items-center justify-center  mcolor">
      <div className="flex flex-col items-center justify-center">
        <div className="e404">
          4
          <div className="pokeball"></div>
          4
        </div>
        
        <p className="text-center text-xl">Page not found</p>
        <a href="/">
          <button className="btn">Go to home</button>
        </a>
      </div>
    </main>
  );
}