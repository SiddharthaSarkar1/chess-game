export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-700 text-white text-2xl font-bold py-4 px-8 rounded"
    >
      {children}
    </button>
  );
};
