export const validators = {
  email(value: string) {
    let error: string | undefined;
    if (!value) {
      error = "the field is required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      error = "invalid email adress";
    }
    return error;
  },
  string(value: string) {
    let error: string | undefined;
    if (!value) {
      error = "the field is required";
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      error = "please make sure you type only English letters without spaces";
    }
    return error;
  },
  cvv(value: string) {
    let error: string | undefined;
    if (!value) {
      error = "required";
    } else if (value.length !== 3 || !/^\d+$/.test(value)) {
      error = "invalid CVV";
    }
    return error;
  },
};
