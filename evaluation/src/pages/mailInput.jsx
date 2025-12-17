import { useState } from "react";

function mailInput({ value, onValidEmailChange }) {
  const [localValue, setLocalValue] = useState(value || "");
  const [error, setError] = useState("");

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setLocalValue(newValue);

    if (!newValue) {
      setError("L'email est obligatoire.");
      onValidEmailChange("");
      return;
    }

    if (!validateEmail(newValue)) {
      setError("Format d'email invalide.");
      onValidEmailChange("");
    } else {
      setError("");
      onValidEmailChange(newValue);
    }
  }

  return (
    <div>
      <label>
        Email :
        <input
          type="email"
          value={localValue}
          onChange={handleChange}
        />
      </label>
      {error && <p>{error}</p>}
    </div>
  );
}

export default mailInput;
