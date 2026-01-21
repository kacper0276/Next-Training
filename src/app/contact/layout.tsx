import { FC } from "react";

type ContactLayoutProps = {
  children: React.ReactNode;
};

// export default function ContactLayout({ children }: ContactLayoutProps) {
const ContactLayout: FC<ContactLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Contact</h1>
      {children}
    </div>
  );
};

export default ContactLayout;
