export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@test.com" && password === "1234") {
        resolve({
          token: "fake-jwt-token",
          user: { role: "ADMIN", name: "Admin User" }
        });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
};

export const registerUser = (name, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          token: "fake-jwt-token",
          user: { name, email, role: "STUDENT" }
        });
      } else {
        reject("Invalid data");
      }
    }, 1000);
  });
};