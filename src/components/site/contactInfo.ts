export const WHATSAPP_NUMBER = "919051838848";
export const PHONE_DISPLAY = "+91 90518 38848";
export const PHONE_TEL = "+919051838848";
export const EMAIL = "contact@emps.org.in";
export const REG_ADDRESS = "18, Rabindra Sarani, Poddar Court, 4th Floor, Kolkata - 700 001";
export const ADMIN_ADDRESS = "187, Canal Street, Sreebhumi, Lake Town, Kolkata - 700 048";

export const waLink = (msg?: string): string => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return msg ? `${base}?text=${encodeURIComponent(msg)}` : base;
};
