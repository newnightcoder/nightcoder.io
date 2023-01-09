import { TypedObject } from "@portabletext/types";

export interface IProject {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  undertitle: string;
  image: IProjectImg;
  description: TypedObject[];
  stack: string[];
  projectId: number;
  next: {
    title: string;
    image: string;
    slug: {
      current: string;
    };
  };
}

export interface IProjectImg {
  asset: {
    _id: string;
  };
  palette: {
    darkMuted: {
      background: string;
      foreground: string;
    };
    darkVibrant: {
      background: string;
      foreground: string;
    };
    dominant: {
      background: string;
      foreground: string;
    };
    lightMuted: {
      background: string;
      foreground: string;
    };
    lightVibrant: {
      background: string;
      foreground: string;
    };
  };
}

export interface IBadge {
  name: string;
  size: number;
  style: "plastic" | "flat" | "flat-square" | "for-the-badge"; // string literal type
}
