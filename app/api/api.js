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

export const getMyCourses = async (token) => {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/users/me?populate[courses][populate][thumbnail][fields][0]=alternativeText&populate[courses][populate][thumbnail][fields][1]=url`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch my courses:", res.status, res.statusText);
      return { data: [] };
    }

    const resultData = await res.json();

    const courses = resultData?.courses || [];
    const data = courses.filter((course) => course.publishedAt !== null);

    return { data };
  } catch (error) {
    console.error("Error fetching API:", error);
    return { data: [] };
  }
};

export const getCourseModules = async (courseId, token) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/courses/${courseId}?populate[modules]=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch course:", res.statusText);
      return null;
    }

    const data = await res.json();
    return data.data || null;
  } catch (err) {
    console.error("Error fetching course:", err);
    return null;
  }
};
