import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "glass" ;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: ButtonVariant;
  $backgroundColor?: string;
  $fullWidth?: boolean;
  $width?: string;
  as?: string;
}
