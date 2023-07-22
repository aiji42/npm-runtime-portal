export interface NpmsSearchResult {
  total: number;
  results: NpmsSearchResultItem[];
}

interface NpmsSearchResultItem {
  package: NpmsPackage;
  score: NpmsScore;
  searchScore: number;
  flags?: NpmsFlags;
}

export interface NpmsPackage {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords?: string[];
  date: string;
  links: {
    npm: string;
    homepage?: string;
    repository?: string;
    bugs?: string;
  };
  author?: {
    name: string;
    email?: string;
    url?: string;
  };
  publisher: {
    username: string;
    email: string;
  };
  maintainers: Array<{
    username: string;
    email: string;
  }>;
}

interface NpmsScore {
  final: number;
  detail: {
    quality: number;
    popularity: number;
    maintenance: number;
  };
}

interface NpmsFlags {
  unstable?: boolean;
  deprecated?: string;
  insecure?: number;
  outdated?: number;
}

export const fetchNpmLibraries = async (
  q: string,
): Promise<NpmsSearchResult> => {
  const npmSearchResponse = await fetch(
    `https://api.npms.io/v2/search?q=${q}&size=${30}&from=0`,
    { next: { revalidate: 3600 } },
  );
  return npmSearchResponse.json();
};
