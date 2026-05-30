import { ThemeProvider } from '@/components/ThemeProvider';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function ChronosLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider world="chronos">
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
