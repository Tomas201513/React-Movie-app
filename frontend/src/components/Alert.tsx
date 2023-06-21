import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Prop) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
