import { NextResponse } from "next/server";

const GITHUB_API_URL = "https://api.github.com/graphql";

async function searchCode(query: string, type: string, limit: number = 50) {
  const graphqlQuery = {
    query: `
      query CodeSearch($query: String!, $limit: Int!) {
        search(query: $query, type: CODE, first: $limit) {
          nodes {
            ... on CodeSearchResult {
              repository {
                nameWithOwner
              }
              file {
                path
              }
              textMatches {
                lineNumber
                fragment
              }
            }
          }
        }
      }
    `,
    variables: {
      query,
      limit,
    },
  };

  const response = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  });

  const data = await response.json();

  // Process and format the results
  return data.data.search.nodes.map((node: any) => {
    const match = node.textMatches[0];
    const symbolName = extractSymbolName(match.fragment, type);
    return {
      name: symbolName,
      path: node.file.path,
      lineNumber: match.lineNumber,
      repository: node.repository.nameWithOwner,
    };
  });
}

function extractSymbolName(fragment: string, type: string): string {
  // Basic extraction based on type - this can be enhanced with better regex
  const patterns = {
    function: /function\s+(\w+)/,
    method: /(\w+)\s*\([^)]*\)/,
    class: /class\s+(\w+)/,
  };

  const match = fragment.match(patterns[type as keyof typeof patterns]);
  return match ? match[1] : "Unknown";
}

export async function POST(request: Request) {
  try {
    const { query, type, limit } = await request.json();
    const results = await searchCode(query, type, limit);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error in code search:", error);
    return NextResponse.json(
      { error: "Failed to search code" },
      { status: 500 }
    );
  }
}
