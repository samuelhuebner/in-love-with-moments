export interface PortfolioSection {
  name: string;
  routerLink: string;
  imagePath?: string;
}

export interface User {
  username: string;
  password: string;
  isAdmin?: boolean;
}
