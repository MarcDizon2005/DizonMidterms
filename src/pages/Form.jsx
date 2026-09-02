import { useState } from 'react';
import '../styles/form.css';

export default function Form({ onAddItem }) {
  const [guitModel, setGuitModel] = useState('');
  const [bodyType, setBodyType] = useState('Electric');
  const [brand, setBrand] = useState('');
  const [stock, setStock] = useState('');
  const [compName, setCompName] = useState('Ibanez');
  const [userRole, setUserRole] = useState('Consumer');

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    if (!guitModel) {
      newErrors.guitModel = 'Item name is required';
      isValid = false;
    } else if (guitModel.length < 3) {
      newErrors.guitModel = 'Item name must be at least 3 characters';
      isValid = false;
    }

    if (!bodyType) {
      newErrors.bodyType = 'Body type is required';
      isValid = false;
    }

    if (!brand) {
      newErrors.brand = 'Brand is required';
      isValid = false;
    }

    if (!stock) {
      newErrors.stock = 'Stock is required';
      isValid = false;
    } else {
      const stockNum = Number(stock);
      if (stockNum < 1 || stockNum > 100) {
        newErrors.stock = 'Stock must be between 1 and 100';
        isValid = false;
      }
    }

    if (!compName) {
      newErrors.compName = 'Company name is required';
      isValid = false;
    }

    if (!userRole) {
      newErrors.userRole = 'User role is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      onAddItem({
        id: Date.now(),
        guitModel,
        bodyType,
        brand,
        stock: Number(stock),
        compName,
        userRole,
      });
    }
  };

  return (
    <div className="formcontainer">
      <h1 className="formtitle">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="formgroup">
          <label className="formlabel">Item Name (Guitar Model): </label>
          <input
            type="text"
            className="forminput"
            value={guitModel}
            onChange={(e) => setGuitModel(e.target.value)}
          />
          {errors.guitModel && <span className="errortext">{errors.guitModel}</span>}
        </div>

        <div className="formgroup">
          <label className="formlabel">Body Type: </label>
          <select
            className="formselect"
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
          >
            <option value="Electric">Electric</option>
            <option value="Acoustic">Acoustic</option>
            <option value="Bass">Bass</option>
            <option value="Classical">Classical</option>
          </select>
          {errors.bodyType && <span className="errortext">{errors.bodyType}</span>}
        </div>

        <div className="formgroup">
          <label className="formlabel">Brand: </label>
          <input
            type="text"
            className="forminput"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          {errors.brand && <span className="errortext">{errors.brand}</span>}
        </div>

        <div className="formgroup">
          <label className="formlabel">Stock (1-100): </label>
          <input
            type="number"
            className="forminput"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          {errors.stock && <span className="errortext">{errors.stock}</span>}
        </div>

        <div className="formgroup">
          <label className="formlabel">Label / Company Name: </label>
          <div className="radiogroup">
            <label className="radiolabel">
              <input
                type="radio"
                className="radioinput"
                name="compName"
                value="Ibanez"
                checked={compName === 'Ibanez'}
                onChange={(e) => setCompName(e.target.value)}
              />
              Ibanez
            </label>
            <label className="radiolabel">
              <input
                type="radio"
                className="radioinput"
                name="compName"
                value="Yamaha"
                checked={compName === 'Yamaha'}
                onChange={(e) => setCompName(e.target.value)}
              />
              Yamaha
            </label>
            <label className="radiolabel">
              <input
                type="radio"
                className="radioinput"
                name="compName"
                value="Fender"
                checked={compName === 'Fender'}
                onChange={(e) => setCompName(e.target.value)}
              />
              Fender
            </label>
            <label className="radiolabel">
              <input
                type="radio"
                className="radioinput"
                name="compName"
                value="Gibson"
                checked={compName === 'Gibson'}
                onChange={(e) => setCompName(e.target.value)}
              />
              Gibson
            </label>
            <label className="radiolabel">
              <input
                type="radio"
                className="radioinput"
                name="compName"
                value="Gretsh"
                checked={compName === 'Gretsh'}
                onChange={(e) => setCompName(e.target.value)}
              />
              Gretsh
            </label>
          </div>
          {errors.compName && <span className="errortext">{errors.compName}</span>}
        </div>

        <div className="formgroup">
          <label className="formlabel">User Role: </label>
          <div className="radiogroup">
            <label className="radiolabel">
              <input
                type="radio"
                className="radioinput"
                name="userRole"
                value="Consumer"
                checked={userRole === 'Consumer'}
                onChange={(e) => setUserRole(e.target.value)}
              />
              Consumer
            </label>
            <label className="radiolabel">
              <input
                type="radio"
                className="radioinput"
                name="userRole"
                value="Merchant"
                checked={userRole === 'Merchant'}
                onChange={(e) => setUserRole(e.target.value)}
              />
              Merchant
            </label>
          </div>
          {errors.userRole && <span className="errortext">{errors.userRole}</span>}
        </div>

        <button type="submit" className="submitbtn">Submit</button>
      </form>
    </div>
  );
}
