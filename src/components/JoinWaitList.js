import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./JoinWaitList.css";

function JoinWaitList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    phoneNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Full Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Only letters and spaces allowed";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;

      case "whatsapp":
        if (!value.trim()) {
          error = "WhatsApp number is required";
        } else if (!/^\d+$/.test(value)) {
          error = "Only digits allowed";
        } else if (value.length !== 10) {
          error = "WhatsApp number must be exactly 10 digits";
        }
        break;
      case "phoneNumber":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^\+?\d+$/.test(value)) {
          error = 'Only numbers and "+" allowed';
        } else {
          const digitsOnly = value.replace(/\D/g, ""); // removes non-digits
          if (digitsOnly.length < 8 || digitsOnly.length > 15) {
            error = "Phone number must be between 8 and 15 digits";
          }
        }
        break;

      case "address":
        if (!value.trim()) {
          error = "Address is required";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const whatsappError = validateField("whatsapp", formData.whatsapp);
    const phoneNumberError = validateField("phoneNumber", formData.phoneNumber);
    const addressError = validateField("address", formData.address);

    if (
      !nameError &&
      !emailError &&
      !whatsappError &&
      !phoneNumberError &&
      !addressError
    ) {
      const orderedData = {
        name: formData.name || "NA",
        email: formData.email || "NA",
        whatsapp: formData.whatsapp || "NA",
        phoneNumber: formData.phoneNumber || "NA",
        address: formData.address || "NA",
      };
      fetch(
        "https://script.google.com/macros/s/AKfycbxARE_XCVY5xiGsWAzmU77AbtdVEDXjSqiHSNKMG3eAU-AJvVgfLrhQZPGvCXOhQI4R/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderedData),
        }
      )
        .then(() => {
          setSubmitted(true);
        })
        .catch((error) => {
          console.error("Error submitting to Google Sheet:", error);
        })

        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.container}>
        {!submitted && <h2 style={styles.heading}>Join Our Waitlist</h2>}

        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>
                Full Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.name && <span style={styles.error}>{errors.name}</span>}
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                Email Address <span style={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.email && <span style={styles.error}>{errors.email}</span>}
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="whatsapp" style={styles.label}>
                WhatsApp Number <span style={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="Enter 10-digit number"
                value={formData.whatsapp}
                onChange={handleChange}
                style={styles.input}
                maxLength={10}
              />
              {errors.whatsapp && (
                <span style={styles.error}>{errors.whatsapp}</span>
              )}
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="phone" style={styles.label}>
                Phone Number <span style={styles.required}>*</span>
              </label>

              <PhoneInput
                country={"in"}
                value={formData.phoneNumber}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, phoneNumber: "+" + value }))
                }
                enableSearch
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  id: "phoneNumber",
                  style: {
                    width: "100%",
                    height: "40px",
                    fontSize: "16px",
                  },
                }}
              />

              {errors.phoneNumber && (
                <span style={styles.error}>{errors.phoneNumber}</span>
              )}
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="address" style={styles.label}>
                Enter your Address <span style={styles.required}>*</span>
              </label>
              <textarea
                type="address"
                textarea
                id="address"
                name="address"
                placeholder="Enter your Address"
                value={formData.address}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.address && (
                <span style={styles.error}>{errors.address}</span>
              )}
            </div>
            {/* 
          <button type="submit" style={styles.button}>
            Join Wait list
          </button> */}

            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? "Submitting..." : "Join Waitlist"}
            </button>
          </form>
        ) : (
          <p className="thanksmessage">
            <span className="congratulation">
              You're officially in! Congratulations!!!
            </span>{" "}
            <p className="thankyou">
              Thank you for joining our waitlist. We'll be in touch soon with an
              official email about the show and tickets{" "}
            </p>
          </p>
        )}
      </div>
    </div>
  );
}

// CSS in js

const styles = {
  container: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    width: "100%",
    padding: "20px",
    textAlign: "left",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#ff5050",
  },

  mainContainer: {
    // backgroundImage: `url(${backgroundimage})`,
    backgroundSize: "cover", // fill the whole container
    backgroundPosition: "cover", // keep the image centered
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },

  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "6px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  required: {
    color: "red",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "4px",
  },

};
export default JoinWaitList;
