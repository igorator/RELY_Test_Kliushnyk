export const Gallery = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
      {children}
    </div>
  );
};
