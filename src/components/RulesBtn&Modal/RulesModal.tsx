import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { useGeneral } from "../../Context";
import { GrClose } from "react-icons/gr";
import "./Rules.scss";
import { motion } from "framer-motion";

const Modal = () => {
  const { setIsModalOpen, isModalOpen, isBonusMode } = useGeneral();

  // Passing this variable as the second argument to createPortal(), to inject our modal into the HTML
  const modalElement = document.getElementById("modal") as Element;

  const modalRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (e: MouseEvent) => {
    const clickedElement = e.target as HTMLElement;
    if (
      // If the modal is open
      isModalOpen &&
      // The outside of the button is clicked
      !modalRef.current?.contains(clickedElement) &&
      // Click is not on the rules button
      !clickedElement.classList.contains("rules-btn")
    ) {
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return createPortal(
    <>
      <div className="rules-overlay"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="rules-modal"
        ref={modalRef}
      >
        <div className="rules-modal--wrapper">
          <span
            onClick={() => setIsModalOpen(false)}
            className="rules-modal__close"
          >
            <GrClose size={25} />
          </span>
          <span className="rules-modal__text">Rules</span>
          <img
            className="rules-modal__image"
            src={
              isBonusMode
                ? "/images/image-rules-bonus.svg"
                : "/images/image-rules.svg"
            }
            alt="rules"
          />
        </div>
      </motion.div>
    </>,
    modalElement
  );
};

export default Modal;
