"use client";

import { useMemo, useState, useEffect } from "react";
import { drivers, teams, type Driver, type TeamId } from "../data/grid";
import { Helmet } from "./Helmet";
import { DriverModal } from "./DriverModal";

export function Gallery() {
  const [activeTeam, setActiveTeam] = useState<TeamId | "all">("all");
  const [selected, setSelected] = useState<Driver | null>(null);

  const filtered = useMemo(
    () =>
      activeTeam === "all"
        ? drivers
        : drivers.filter((d) => d.teamId === activeTeam),
    [activeTeam],
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const teamList = Object.values(teams);

  return (
    <>
      <div className="sticky top-0 z-20 backdrop-blur-md bg-black/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTeam("all")}
            className={`px-3 py-1.5 text-xs font-display tracking-widest uppercase rounded-full transition-all ${
              activeTeam === "all"
                ? "bg-white text-black"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            Full Grid
          </button>
          {teamList.map((team) => (
            <button
              key={team.id}
              onClick={() => setActiveTeam(team.id)}
              className={`px-3 py-1.5 text-xs font-display tracking-widest uppercase rounded-full transition-all border ${
                activeTeam === team.id
                  ? "text-black border-transparent"
                  : "border-white/10 text-white/60 hover:text-white"
              }`}
              style={
                activeTeam === team.id
                  ? { backgroundColor: team.color }
                  : undefined
              }
            >
              {team.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((driver) => {
            const team = teams[driver.teamId];
            return (
              <button
                key={driver.id}
                onClick={() => setSelected(driver)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/5 hover:border-white/15 transition-all duration-300 text-left"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${team.color}25, transparent 60%)`,
                  }}
                />
                <div
                  className="absolute -top-px left-6 right-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${team.color}, transparent)`,
                  }}
                />

                <div className="relative aspect-square flex items-center justify-center p-6">
                  <Helmet
                    driver={driver}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3 drop-shadow-2xl"
                  />
                  <div className="absolute top-4 right-4 text-3xl opacity-90">
                    {driver.countryFlag}
                  </div>
                  <div
                    className="absolute top-4 left-4 px-2 py-0.5 text-[10px] font-display tracking-widest uppercase rounded-sm text-white"
                    style={{ backgroundColor: team.color }}
                  >
                    {team.name}
                  </div>
                </div>

                <div className="relative px-5 pb-5 pt-2 border-t border-white/5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-white/40 font-display">
                        {driver.firstName}
                      </div>
                      <div className="text-2xl font-display tracking-wide text-white leading-tight">
                        {driver.lastName}
                      </div>
                    </div>
                    <div
                      className="font-display text-5xl leading-none tabular-nums"
                      style={{ color: team.color }}
                    >
                      {driver.number}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <DriverModal
        driver={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
