"use server";

export const AddToWaitlist = async (
  formData: FormData
): Promise<{ success?: boolean; error?: string }> => {
  try {
    // Extract email from formData
    const email = formData.get("email") as string;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { error: "Invalid email address" };
    }

    // Make API call to add email to waitlist
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to add to waitlist");
    }

    return { success: true };
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return { error: "Failed to add to waitlist. Please try again later." };
  }
};
