import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ imageUrl, closeModal, isOpen }) {
  console.log("isOpen:", isOpen);
  console.log("imageUrl:", imageUrl);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <button onClick={closeModal}>Close Modal</button>
        <img src={imageUrl} alt="Image" />
      </div>
    </Modal>
  );
}
