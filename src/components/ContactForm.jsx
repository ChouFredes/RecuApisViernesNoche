import { useDispatch, useSelector } from "react-redux";
import {
  updateContactForm,
  submitFormSuccess,
  resetFormSubmission,
} from "../redux/slices/contactSlice";
import styles from "../assets/css/ContactForm.module.css";
import { useState, useRef } from "react";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactForm = useSelector((state) => state.contact.contactForm);
  const formSubmitted = useSelector((state) => state.contact.formSubmitted);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!contactForm.name) newErrors.name = "Nombre y Apellido es requerido";
    if (!contactForm.issue) newErrors.issue = "La problemática es requerida";
    if (!contactForm.description)
      newErrors.description = "La descripción es requerida";
    if (contactForm.photos.length === 0)
      newErrors.photos = "Debe subir al menos una foto";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateContactForm({ [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate.toString(),
    }));

    dispatch(updateContactForm({ photos: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(submitFormSuccess());

      dispatch(resetFormSubmission());

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre y Apellido:</label>
          <input
            type="text"
            name="name"
            value={contactForm.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
        </div>
        <div>
          <label>Problemática:</label>
          <input
            type="text"
            name="issue"
            value={contactForm.issue}
            onChange={handleChange}
          />
          {errors.issue && (
            <span className={styles.errorMessage}>{errors.issue}</span>
          )}
        </div>
        <div>
          <label>Carga de múltiples fotos:</label>
          <input
            type="file"
            name="photos"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          {errors.photos && (
            <span className={styles.errorMessage}>{errors.photos}</span>
          )}
        </div>
        <div>
          <label htmlFor="description">Descripción del problema:</label>
          <textarea
            id="description"
            name="description"
            value={contactForm.description}
            onChange={handleChange}
            className={styles.descriptionTextarea}
          />
          {errors.description && (
            <span className={styles.errorMessage}>{errors.description}</span>
          )}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
