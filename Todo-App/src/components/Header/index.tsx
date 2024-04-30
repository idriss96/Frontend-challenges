'use client';

interface HeaderProps {
  title: string;
  theme?: any;
}

const Header: React.FC<HeaderProps> = ({ title, theme }) => {
  return (
    <div className="header-content">
      <h1 className="title">{title}</h1>
      <div className="theme-btn">{theme}</div>
    </div>
  );
};

export default Header;
