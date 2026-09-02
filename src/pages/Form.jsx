import { useState } from 'react';

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
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name (Guitar Model): </label>
          <input
            type="text"
            value={guitModel}
            onChange={(e) => setGuitModel(e.target.value)}
          />
          {errors.guitModel && <span>{errors.guitModel}</span>}
        </div>

        <div>
          <label>Body Type: </label>
          <select
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
          >
            <option value="Electric">Electric</option>
            <option value="Acoustic">Acoustic</option>
            <option value="Bass">Bass</option>
            <option value="Classical">Classical</option>
          </select>
          {errors.bodyType && <span>{errors.bodyType}</span>}
        </div>

        <div>
          <label>Brand: </label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          {errors.brand && <span>{errors.brand}</span>}
        </div>

        <div>
          <label>Stock (1-100): </label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          {errors.stock && <span>{errors.stock}</span>}
        </div>

        <div>
          <label>Label / Company Name: </label>
          <label>
            <input
              type="radio"
              name="compName"
              value="Ibanez"
              checked={compName === 'Ibanez'}
              onChange={(e) => setCompName(e.target.value)}
            />
            Ibanez
          </label>
          <label>
            <input
              type="radio"
              name="compName"
              value="Yamaha"
              checked={compName === 'Yamaha'}
              onChange={(e) => setCompName(e.target.value)}
            />
            Yamaha
          </label>
          <label>
            <input
              type="radio"
              name="compName"
              value="Fender"
              checked={compName === 'Fender'}
              onChange={(e) => setCompName(e.target.value)}
            />
            Fender
          </label>
          <label>
            <input
              type="radio"
              name="compName"
              value="Gibson"
              checked={compName === 'Gibson'}
              onChange={(e) => setCompName(e.target.value)}
            />
            Gibson
          </label>
          <label>
            <input
              type="radio"
              name="compName"
              value="Gretsh"
              checked={compName === 'Gretsh'}
              onChange={(e) => setCompName(e.target.value)}
            />
            Gretsh
          </label>
          {errors.compName && <span>{errors.compName}</span>}
        </div>

        <div>
          <label>User Role: </label>
          <label>
            <input
              type="radio"
              name="userRole"
              value="Consumer"
              checked={userRole === 'Consumer'}
              onChange={(e) => setUserRole(e.target.value)}
            />
            Consumer
          </label>
          <label>
            <input
              type="radio"
              name="userRole"
              value="Merchant"
              checked={userRole === 'Merchant'}
              onChange={(e) => setUserRole(e.target.value)}
            />
            Merchant
          </label>
          {errors.userRole && <span>{errors.userRole}</span>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
