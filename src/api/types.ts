export type SauceID = 1 | 2 | 3;
export type SauceName = "томленый" | "жаркий" | "копченый";

export interface AuthRequest {
  token: string;
  lang?: string | null;
  country?: string | null;
}

export interface AuthResponse {
  message: string;
  user: string;
  country: string;
  lang: string;
  voted: boolean;
  sauce: SauceID | null;
  sauce_name: SauceName | null;
}

export interface VoteRequest {
  token: string;
  sauce: SauceID;
  completed: boolean | null;
}

export interface VoteSuccessResponse {
  message: string;
  user: string;
  voted: boolean;
}

export interface VoteErrorResponse {
  message: string;
}

export type VoteResponse = VoteSuccessResponse | VoteErrorResponse;

export interface RatingItem {
  sauce: SauceID;
  count: number;
}

export interface RatingResponse {
  data: RatingItem[];
  total_votes: number;
}

export interface VisitResponse {
  message: string;
}
