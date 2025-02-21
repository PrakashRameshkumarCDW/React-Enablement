export const fetchUrl = async (url:string) => {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const text = await response.text();
    if (!text) {
      console.warn("Empty response received from:", url);
      return null; 
    }

    const data = JSON.parse(text);
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching :", error);
    return [];
  }
};
