export type OrderBySearch =
  | "latest"
  | "oldest"
  | "popular"
  | "views"
  | "downloads";
export interface QueryImageProps {
  photoName: string;
  pageNumber: number;
  orderBy: OrderBySearch;
  userId?: string;
}
type User = {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: {
    large: string;
    medium: string;
    small: string;
  };
  social: {
    instagram_username?: string;
    paypal_email?: string;
    portfolio_url?: string;
    twitter_username?: string;
  };
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username?: string;
  updated_at: Date;
  username: string;
};

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
};
export type Results = {
  alt_description: string;
  alternative_slugs: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    ja: string;
    ko: string;
    pt: string;
  };
  asset_type: string;
  blur_hash: string;
  breadcrumbs: { slug: string; title: string; index: number; type: string }[];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  id: string;
  likes: number;
  liked_by_user: boolean;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  promoted_at: Date;
  slug: string;
  sponsorship: string;
  tags?: {
    source: {
      ancestry: {
        category: { slug: string; pretty_slug: string };
        subcategory: { slug: string; pretty_slug: string };
        type: { slug: string; pretty_slug: string };
      };
      cover_photo: {
        alt_description: string;
        alternative_slugs: {
          de: string;
          en: string;
          es: string;
          fr: string;
          it: string;
          ja: string;
          ko: string;
          pt: string;
        };

        asset_type: string;
        blur_hash: string;
        breadcrumbs: [];
        color: string;
        created_at: Date;
        current_user_collections: [];
        description: string;
        height: number;
        id: string;
        liked_by_user: false;
        likes: number;
        links: {
          download: string;
          download_location: string;
          html: string;
          self: string;
        };
        plus: boolean;
        premium: boolean;
        promoted_at: Date;
        slug: string;
        sponsorship?: string;
        updated_at: Date;
        urls: Urls;
        user: User;
        width: number;
      };
      description: string;
      meta_description: string;
      meta_title: string;
      subtitle: string;
      title: string;
    };
    title: string;
    type: string;
  }[];
  updated_at: string;
  urls: Urls;
  user: User;
  width: number;
};

export interface FetchRes {
  total: number;
  total_pages: number;
  results: Results[];
}

export type ValuesType = {
  date: string;
  value: number;
};

export type HistoricalType = {
  change: number;
  quantity: number;
  resolution: "days" | "hours";
  values: ValuesType[];
  average?: number;
};
export interface PhotoStatisticsTypes {
  downloads: {
    total: number;
    historical: HistoricalType;
  };
  id: string;
  likes: {
    total: number;
    historical: HistoricalType;
  };
  slug: string;
  views: {
    total: number;
    historical: HistoricalType;
  };
}
export interface UserStatisticsTypes {
  downloads: {
    total: number;
    historical: HistoricalType;
  };
  id: string;
  views: {
    total: number;
    historical: HistoricalType;
  };
  username: string;
}
