import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "./Popup";
import styles from "./css/ProductForm.module.css";

const ProductForm = () => {
  const dispatch = useDispatch();
  const productForm = useSelector((state) => state.product.productForm);
  const formSubmitted = useSelector((state) => state.product.formSubmitted);

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const fileInputRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!productForm.name)
      newErrors.name = "El nombre del producto es requerido";
    if (!productForm.description)
      newErrors.description = "La descripción es requerida";
    if (!productForm.price) newErrors.price = "El precio es requerido";
    if (!productForm.stock)
      newErrors.stock = "La cantidad de stock es requerida";
    if (productForm.photos.length === 0)
      newErrors.photos = "Debe subir al menos una foto";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_PRODUCT_FORM",
      payload: { [name]: value },
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate.toString(),
    }));

    dispatch({
      type: "UPDATE_PRODUCT_FORM",
      payload: { photos: files },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch({ type: "SUBMIT_PRODUCT_FORM_SUCCESS" });
      setShowPopup(true);

      dispatch({ type: "RESET_PRODUCT_FORM_SUBMISSION" });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.formContainer}>
      {showPopup && (
        <Popup
          message="Producto cargado con éxito"
          onClose={handleClosePopup}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del producto:</label>
          <input
            type="text"
            name="name"
            value={productForm.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
        </div>
        <div>
          <label>Descripción del producto:</label>
          <textarea
            name="description"
            value={productForm.description}
            onChange={handleChange}
            className={styles.descriptionTextarea}
          />
          {errors.description && (
            <span className={styles.errorMessage}>{errors.description}</span>
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
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={productForm.price}
            onChange={handleChange}
          />
          {errors.price && (
            <span className={styles.errorMessage}>{errors.price}</span>
          )}
        </div>
        <div>
          <label>Cantidad de stock:</label>
          <input
            type="number"
            name="stock"
            value={productForm.stock}
            onChange={handleChange}
          />
          {errors.stock && (
            <span className={styles.errorMessage}>{errors.stock}</span>
          )}
        </div>
        <button type="submit">Cargar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
