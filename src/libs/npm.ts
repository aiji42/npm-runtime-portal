export interface NpmsSearchResult {
  total: number;
  objects: NpmsSearchResultItem[];
}

interface NpmsSearchResultItem {
  package: NpmsPackage;
  score: NpmsScore;
  searchScore: number;
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
    `https://registry.npmjs.org/-/v1/search?text=${q}&size=${10}`,
    { next: { revalidate: 3600 } },
  );
  return npmSearchResponse.json();
};
