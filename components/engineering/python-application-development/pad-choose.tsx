import { Check } from "lucide-react";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const CRITERIA = [
  "Real production Python applications, not just frameworks on a services page",
  "Framework depth matched to your project — Django and FastAPI are not interchangeable",
  "Documented testing and deployment process (pytest, CI/CD, cloud deployment)",
  "Clear approach to AI or data features if your roadmap includes them",
  "Unambiguous ownership of source code and documentation from day one",
] as const;

const COLUMNS = ["Xorora", "In-house hire", "Freelancer"] as const;

const ROWS: {
  label: string;
  values: [string, string, string];
}[] = [
  {
    label: "Time to start",
    values: ["1–2 weeks", "8–14 weeks to hire", "1–3 weeks"],
  },
  {
    label: "AI + app under one roof",
    values: ["Yes", "Separate hires", "Rarely"],
  },
  {
    label: "Production track record",
    values: ["Case studies available", "Depends on hire", "Variable"],
  },
  {
    label: "Continuity if someone leaves",
    values: [
      "Team-backed",
      "Single point of failure",
      "Single point of failure",
    ],
  },
  {
    label: "Minimum project",
    values: ["$10,000+", "Salary + benefits", "Negotiate"],
  },
  {
    label: "Source ownership",
    values: ["Yours", "Yours", "Negotiate"],
  },
];

export function PadChoose() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How to choose"
        title="How to choose a Python app development company"
        sub="A working demo and a system handling real production traffic are very different things. Ask directly about the framework your project actually needs."
        className="mb-10 max-w-[760px]"
      />
      <ul className="mb-10 max-w-[720px] list-none space-y-3 p-0">
        {CRITERIA.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 font-sans text-[15.5px] text-fg2 leading-relaxed"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-tangerine-500"
              aria-hidden
            />
            {item.includes("AI or data") ? (
              <>
                Clear approach to AI or data features if your roadmap includes
                them — a{" "}
                <Link
                  href={ROUTES.mlDataScience}
                  className="font-semibold text-accent no-underline hover:text-tangerine-600"
                >
                  team that handles both
                </Link>{" "}
                avoids coordinating two separate vendors
              </>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>

      <div className="overflow-hidden rounded-(--r-xl) border border-border max-md:hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-indigo-50">
              <th className="w-[22%] px-5 py-4 font-sans font-semibold text-[13px] text-fg3">
                Criterion
              </th>
              {COLUMNS.map((col, i) => (
                <th
                  key={col}
                  className={cn(
                    "px-5 py-4 font-sans font-semibold text-[14.5px] leading-snug",
                    i === 0 ? "text-tangerine-600" : "text-fg1",
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, rowIndex) => (
              <tr
                key={row.label}
                className={cn(
                  "border-border border-t",
                  rowIndex % 2 === 0 ? "bg-surface" : "bg-slate-50",
                )}
              >
                <th className="px-5 py-4 align-top font-sans font-semibold text-[14px] text-fg1">
                  {row.label}
                </th>
                {row.values.map((value, colIndex) => (
                  <td
                    key={`${row.label}-${colIndex}`}
                    className={cn(
                      "px-5 py-4 align-top font-sans text-[14px] leading-relaxed",
                      colIndex === 0 ? "font-semibold text-fg1" : "text-fg2",
                    )}
                  >
                    {colIndex === 0 ? (
                      <span className="inline-flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-tangerine-500"
                          aria-hidden
                        />
                        {value}
                      </span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-10 mb-0 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
        Xorora is a US-based AI development partner offering Python application
        development services built for teams that need software to reach
        production. Recent{" "}
        <Link
          href={ROUTES.ourWork}
          className="font-semibold text-accent no-underline hover:text-tangerine-600"
        >
          engagements
        </Link>{" "}
        include multi-portal SaaS backends and a{" "}
        <Link
          href={ROUTES.ourWork}
          className="font-semibold text-accent no-underline hover:text-tangerine-600"
        >
          real-time compliance intelligence platform
        </Link>
        .
      </p>
    </LightSection>
  );
}
