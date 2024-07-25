import Alert from "./alert";
import Footer from "./footer";
import Header from "./header";
import Logo from "./logo";
import Meta from "./meta";


interface CustomerLayoutProps {
  className?: string;
  preview: any;
  children: any;
}


const Layout: React.FC<CustomerLayoutProps> = ({ preview, children, className }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className={`min-h-screen mt-16 ${className}`}>
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout