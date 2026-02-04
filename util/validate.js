function Validate(form) {
  const errors = [];

  if (!form.name?.trim()) errors.push("Name is required");
  if (!form.address?.trim()) errors.push("Address is required");
  if (!/^\d{10}$/.test(form.phone)) {
    errors.push("Valid phone number is required");
  }
  if (!form.picThumnail || !form.picThumnail.trim().startsWith("http")) {
    errors.push("Invalid thumbnail image URL");
  }

  if (isNaN(Number(form.price2)) || Number(form.price2) <= 0) {
    errors.push("Price for 2 persons is required");
  }

  if (isNaN(Number(form.price8)) || Number(form.price8) <= 0) {
    errors.push("Price for 8 persons is required");
  }

  if (isNaN(Number(form.price16)) || Number(form.price16) <= 0) {
    errors.push("Price for 16 persons is required");
  }
  if (isNaN(Number(form.total)) || Number(form.total) <= 0) {
    errors.push("Invalid Total room count");
  }
  if (isNaN(Number(form.available)) || Number(form.available) <= 0) {
    errors.push("Invalid Available room count");
  }
  if ( form.searchid==="") {
    errors.push("Please Select the University");
  }

  return {
    valid: errors.length === 0,
    list: errors
  };
}

export { Validate };
