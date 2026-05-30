import { ThemeProvider } from '@/components/ThemeProvider';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function MBILayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider world="mbi">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
