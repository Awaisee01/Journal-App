
import './globals.css';

export const metadata = {
  title: 'Journaling App',
  description: 'A simple Next.js journaling app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto p-4">
          <header>
            <h1 className="text-3xl font-bold mb-4">My Journaling App</h1>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
