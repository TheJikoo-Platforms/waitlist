"use server";

export const AddToWaitlist = async (
  formData: FormData
): Promise<{ success?: boolean; error?: string }> => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    if (!name || name.trim() === "") {
      return { error: "Name is required" };
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { error: "Invalid email address" };
    }

    const response = await fetch(
      "https://jikoo-backend.onrender.com/waitlists",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add to waitlist");
    }

    return { success: true };
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return { error: "Failed to add to waitlist. Please try again later." };
  }
};
