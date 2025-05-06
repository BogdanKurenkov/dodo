type SauceID = 1 | 2 | 3;

export interface AuthResponse {
  message: string;
  user: string;
  voted: boolean;
}

export interface VoteRequest {
  token: string;
  sauce: SauceID;
  completed: boolean | null;
}

interface VoteSuccessResponse {
  message: string;
  user: string;
  voted: boolean;
}

interface VoteErrorResponse {
  message: string;
}

export type VoteResponse = VoteSuccessResponse | VoteErrorResponse;

interface RatingItem {
  sauce: SauceID;
  count: number;
}

export interface RatingResponse {
  data: RatingItem[];
  total_votes: number;
}
