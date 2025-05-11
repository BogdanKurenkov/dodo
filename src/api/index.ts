import {
  AuthRequest,
  AuthResponse,
  RatingResponse,
  VoteRequest,
  VoteResponse,
  VisitResponse,
} from "./types";

const API_BASE_URL = "https://vkus.dodopizza.org";

export const authUser = async (data: AuthRequest): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Auth failed: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

export const sendVote = async (data: VoteRequest): Promise<VoteResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/voice`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Vote failed: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Vote request failed:", error);
    throw error;
  }
};

export const getRating = async (): Promise<RatingResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/rating`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get rating: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch rating:", error);
    throw error;
  }
};

export const getExcelReport = async (): Promise<Blob> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/voices/export`, {
      method: "GET",
      headers: {
        Accept:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get Excel report: ${response.status}`);
    }

    return response.blob();
  } catch (error) {
    console.error("Failed to fetch Excel report:", error);
    throw error;
  }
};

export const trackVisit = async (
  refererLink?: string
): Promise<VisitResponse> => {
  try {
    const url = new URL(`${API_BASE_URL}/api/visit`);
    if (refererLink) {
      url.searchParams.append("referer_link", refererLink);
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to track visit: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to track visit:", error);
    throw error;
  }
};
