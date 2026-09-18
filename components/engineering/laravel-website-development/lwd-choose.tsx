import { Check } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

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
    label: "Senior Laravel availability",
    values: ["Immediate", "Variable by market", "Wide quality spread"],
  },
  {
    label: "Architecture review",
    values: ["Included", "Depends on the hire", "Rarely"],
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
    label: "Upgrade path maintained",
    values: ["Yes", "Depends", "Rarely"],
  },
  {
    label: "Source and infra ownership",
    values: ["Yours", "Yours", "Negotiate"],
  },
];

export function LwdChoose() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How to choose"
        title="Choosing a Laravel web development agency"
        sub="Laravel's low barrier to entry is why it has the widest quality spread of any framework we work in. Ask any Laravel website development company how it prevents N+1 queries, where domain logic sits relative to Eloquent models, and what its plan is for the next major version. Those three answers separate a Laravel web development agency that maintains systems from one that only builds them."
        className="mb-10 max-w-[760px]"
      />
      <p className="mb-10 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
        The honest case for an in-house hire: if this platform is your core
        product and needs continuous work for years, hire. We will say so on the
        call. Our work is strongest when you need senior Laravel capacity now,
        or when the build has a defined end.
      </p>

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

      <div className="flex flex-col gap-4 md:hidden">
        {ROWS.map((row) => (
          <div
            key={row.label}
            className="overflow-hidden rounded-(--r-lg) border border-border bg-slate-50"
          >
            <div className="border-border border-b bg-indigo-50 px-4 py-3 font-sans font-semibold text-[14px] text-fg1">
              {row.label}
            </div>
            <ul className="m-0 list-none divide-y divide-border p-0">
              {COLUMNS.map((col, i) => (
                <li key={col} className="px-4 py-3.5">
                  <div
                    className={cn(
                      "mb-1 font-sans font-semibold text-[12.5px]",
                      i === 0 ? "text-tangerine-600" : "text-fg3",
                    )}
                  >
                    {col}
                  </div>
                  <p
                    className={cn(
                      "m-0 font-sans text-[14px] leading-relaxed",
                      i === 0 ? "font-semibold text-fg1" : "text-fg2",
                    )}
                  >
                    {row.values[i]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
