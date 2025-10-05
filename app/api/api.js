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
