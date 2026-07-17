export interface QuoteState {
  spaceType: string;
  companyName: string;
  isNewService: string;
  additionalRequests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  avatarColor: string;
  ago: string;
  rating: number;
  text: string;
}
