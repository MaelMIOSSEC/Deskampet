import { Modal } from "react-bootstrap";

interface MapModalProps {
  show: boolean;
  handleClose: () => void;
}

const MapModal = ({ show, handleClose }: MapModalProps) => {
  return (
    <>
      <Modal
        dialogClassName="custom-modal-width"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="modal-body p-4">
          <div className="text-center mb-3">
            <h4 className="text-uppercase">Zone couverte par Deskampet</h4>
            <p className="text-muted">
              Découvrez les localisations où nous intervenons.
            </p>
          </div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84715.37475189145!2d-4.327759564077277!3d48.43051719192984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x649212bc7ae4c799%3A0xd971bfb2da12383e!2sDeskampet!5e0!3m2!1sfr!2sfr!4v1717534025156!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MapModal;
