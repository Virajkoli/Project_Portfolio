"use client";

import { useState, useEffect } from "react";

interface GitHubContributionsProps {
  username: string;
  years?: number[];
}

interface ContributionData {
  year: number;
  total: number;
}

export function GitHubContributions({
  username,
  years = [2025, 2026],
}: GitHubContributionsProps) {
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);
  const [contributionData, setContributionData] = useState<ContributionData[]>(
    []
  );
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        const data = await response.json();

        // Calculate contributions per year
        const yearlyData: { [key: number]: number } = {};
        let total = 0;

        data.contributions.forEach((contribution: any) => {
          const year = new Date(contribution.date).getFullYear();
          const count = contribution.count;
          yearlyData[year] = (yearlyData[year] || 0) + count;
          total += count;
        });

        const yearData = Object.entries(yearlyData).map(([year, count]) => ({
          year: parseInt(year),
          total: count as number,
        }));

        setContributionData(yearData);
        setTotalContributions(total);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const selectedYearContributions =
    contributionData.find((d) => d.year === selectedYear)?.total || 0;

  return (
    <div className="w-full">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/50">
          <div className="text-zinc-400 text-xs font-medium mb-1">
            Total Contributions
          </div>
          <div className="text-2xl font-bold text-white">
            {loading ? "..." : totalContributions.toLocaleString()}
          </div>
        </div>
        <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/50">
          <div className="text-zinc-400 text-xs font-medium mb-1">
            Contributions in {selectedYear}
          </div>
          <div className="text-2xl font-bold text-blue-400">
            {loading ? "..." : selectedYearContributions.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Year Filter */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-zinc-400 text-sm font-medium">Year:</span>
        <div className="flex gap-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedYear === year
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="w-full border border-zinc-800 rounded-lg p-4 bg-zinc-900/50 overflow-x-auto">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <h4 className="text-white font-semibold text-sm">
            GitHub Contributions - {selectedYear}
          </h4>
        </div>

        {/* Embedded GitHub Contribution Graph */}
        <div className="relative w-full min-h-[150px] flex items-center justify-center">
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt={`${username}'s GitHub contributions`}
            className="w-full h-auto max-w-full rounded"
            style={{ filter: "invert(1) hue-rotate(180deg)" }}
          />
        </div>

        {/* GitHub Stats Link */}
        <div className="mt-4 pt-3 border-t border-zinc-800">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View full GitHub profile
          </a>
        </div>
      </div>

      {/* Contribution Legend */}
      <div className="flex items-center gap-4 mt-3 text-xs text-zinc-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-zinc-800"></div>
          <div className="w-3 h-3 rounded-sm bg-green-900"></div>
          <div className="w-3 h-3 rounded-sm bg-green-700"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
          <div className="w-3 h-3 rounded-sm bg-green-400"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
