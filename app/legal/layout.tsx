import { ThemeProvider } from '@/components/ThemeProvider';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider world="legal">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
