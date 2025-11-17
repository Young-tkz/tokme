
export interface VideoDetails {
  id: string;
  thumbnailUrl: string;
  title: string;
  author: string;
  downloads: {
    hd: string;
    sd: string;
    noWatermark: string;
  };
}
