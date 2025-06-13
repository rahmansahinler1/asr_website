export type BlogSection = {
  header: string;
  content: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  previewImage: string;
  fullImage: string;
  introText: string;
  slug: string;
  sections: BlogSection[];
};