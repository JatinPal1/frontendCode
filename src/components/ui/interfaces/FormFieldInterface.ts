import { ReactNode } from "react";

export interface IFormFieldProps {
    label: string;
    id: string;
    name: string;
    type: string;
    placeholder?: string;
    children?: ReactNode;
    required?: boolean
  }
  