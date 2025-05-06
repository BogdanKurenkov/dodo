import {
  AuthResponse,
  RatingResponse,
  VoteRequest,
  VoteResponse,
} from "./types";

const API_BASE_URL = "https://gitea.azatdev.ru/default/dodo_back";

export const authUser = async (token: string): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
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
  const response = await fetch(`${API_BASE_URL}/api/voice`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Vote failed: ${response.status}`);
  }

  return response.json();
};

export const getRating = async (): Promise<RatingResponse> => {
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
};

export const getExcelReport = async (): Promise<Blob> => {
  const response = await fetch(`${API_BASE_URL}/api/rating`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to get Excel report: ${response.status}`);
  }

  return response.blob();
};
