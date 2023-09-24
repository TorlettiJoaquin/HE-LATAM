import "./Spinner.css";

export const Spinner = () => {
  return (
    <div className="flex justify-center py-28">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
