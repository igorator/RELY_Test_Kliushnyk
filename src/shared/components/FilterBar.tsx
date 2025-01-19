export const FilterBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      {children}
    </div>
  );
};
