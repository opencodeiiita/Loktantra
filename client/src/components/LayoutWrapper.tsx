'use client';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <>
      {children}
    </>
  );
};

export default LayoutWrapper;
