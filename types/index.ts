export type StudioError = {
  message: string;
  date: string;
};

export type Studio = {
  name: string;
  country?: string;
  city?: string;
  state?: string;
  website?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  type?: string;
  tags: string[];
  inactive?: boolean;
  last_time_active?: string;
  error?: StudioError | null;
};

export type GamePlatform = {
  name: string;
  url?: string | null;
};

export type GameCrowdfunding = {
  url?: string | null;
  funded?: boolean;
};

export type Game = {
  name: string;
  genre?: string[] | null;
  developers?: string[] | null;
  publishers?: string[] | null;
  engine?: string | null;
  'date-launch'?: string | null;
  status?: string | null;
  crowdfunding: GameCrowdfunding;
  platforms?: GamePlatform[] | null;
};

export type DiscordChannel = {
  id: string;
  name: string;
};

export type DiscordEvent = {
  id: string;
  name: string;
  description: string;
  image?: string | null;
  scheduled_start_time: string;
  scheduled_end_time?: string | null;
  channel_id?: string | null;
  user_count?: number;
  channel?: DiscordChannel | null;
};

export type DiscordWidget = {
  name: string;
  presence_count: number;
  instant_invite: string;
  members?: unknown[];
};

export type DiscordInvite = {
  code?: string;
};

export type NewsletterEntry = {
  id: string;
  title: string;
  titleFormatted: string;
  description: string | null;
  image: string | null;
  startMonth: number;
  endMonth: number;
  url: string;
  startDate: string;
  endDate: string;
};
