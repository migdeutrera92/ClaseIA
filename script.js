const REGISTRATION_ENDPOINT_URL = "PEGA_AQUI_TU_ENDPOINT";

const form = document.getElementById("leadForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

function setMessage(type, text) {
  formMessage.className = `form-message ${type}`;
  formMessage.textContent = text;
}

function clearErrors() {
  document.querySelectorAll("[data-error-for]").forEach((el) => el.textContent = "");
}

function setError(field, text) {
  const el = document.querySelector(`[data-error-for="${field}"]`);
  if (el) el.textContent = text;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(payload) {
  let ok = true;

  if (!payload.nombre || payload.nombre.trim().length < 2) {
    setError("nombre", "Ingresa tu nombre.");
    ok = false;
  }

  if (!payload.apellido || payload.apellido.trim().length < 2) {
    setError("apellido", "Ingresa tu apellido.");
    ok = false;
  }

  if (!payload.emprendimiento || payload.emprendimiento.trim().length < 2) {
    setError("emprendimiento", "Ingresa tu emprendimiento.");
    ok = false;
  }

  if (!payload.correo || !isValidEmail(payload.correo)) {
    setError("correo", "Ingresa un correo válido.");
    ok = false;
  }

  return ok;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  clearErrors();
  formMessage.className = "form-message";
  formMessage.textContent = "";

  const formData = new FormData(form);

  if (formData.get("website")) return;

  const payload = {
    nombre: String(formData.get("nombre") || "").trim(),
    apellido: String(formData.get("apellido") || "").trim(),
    emprendimiento: String(formData.get("emprendimiento") || "").trim(),
    correo: String(formData.get("correo") || "").trim().toLowerCase(),
    percepcion: String(formData.get("percepcion") || "").trim(),
    source: String(formData.get("source") || "registro_clase_ia_automatizacion"),
    fecha_registro: new Date().toISOString(),
    pagina: window.location.href
  };

  if (!validate(payload)) {
    setMessage("error", "Revisa los campos marcados antes de enviar.");
    return;
  }

  if (!REGISTRATION_ENDPOINT_URL || REGISTRATION_ENDPOINT_URL.includes("PEGA_AQUI")) {
    setMessage("success", "La landing ya está lista. Solo falta conectar la URL del endpoint en script.js.");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  try {
    const response = await fetch(REGISTRATION_ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    setMessage("success", "¡Listo! Tu registro fue enviado correctamente.");
    form.reset();
  } catch (error) {
    console.error(error);
    setMessage("error", "No pudimos enviar el registro. Revisa la URL del endpoint e intenta nuevamente.");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Quiero asistir";
  }
});
