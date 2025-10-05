export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getCourses = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/courses?populate=*`);
    if (!res.ok) {
      console.error("Failed to fetch courses:", res.statusText);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return null;
  }
};

export const getEnrollmentTime = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/enrollment-times`);
    if (!res.ok) {
      console.error("Failed to fetch enrollment time:", res.statusText);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return null;
  }
};

export const getAchievements = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/achievements`);
    if (!res.ok) {
      console.error("Failed to fetch achievements:", res.statusText);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return null;
  }
};

export const registerUser = async ({ username, email, password }) => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.error?.message || "Registration failed" };
    }

    return { user: data.user, jwt: data.jwt };
  } catch (error) {
    return { error: error.message };
  }
};

export const loginUser = async ({ identifier, password }) => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.error?.message || "Login failed" };
    }

    return { user: data.user, jwt: data.jwt };
  } catch (error) {
    return { error: error.message };
  }
};
