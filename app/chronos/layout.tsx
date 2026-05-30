import { ThemeProvider } from '@/components/ThemeProvider';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function ChronosLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider world="chronos">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
