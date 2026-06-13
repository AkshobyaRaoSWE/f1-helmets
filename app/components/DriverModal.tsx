"use client";

import { useEffect } from "react";
import { teams, type Driver } from "../data/grid";
import { Helmet } from "./Helmet";

type Props = {
  driver: Driver | null;
  onClose: () => void;
};

export function DriverModal({ driver, onClose }: Props) {
  useEffect(() => {
    if (!driver) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [driver]);

  if (!driver) return null;
  const team = teams[driver.teamId];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-[fadeIn_180ms_ease-out]"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden
      />

      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${team.color}, transparent)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none rounded-3xl"
          style={{
            background: `radial-gradient(circle at 30% 0%, ${team.color}30, transparent 50%)`,
          }}
        />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white grid place-items-center transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative grid md:grid-cols-2 gap-0">
          <div className="relative aspect-square md:aspect-auto p-8 md:p-10 flex items-center justify-center">
            <div
              className="absolute inset-8 md:inset-10 rounded-2xl opacity-60"
              style={{
                background: `radial-gradient(circle, ${team.color}25, transparent 70%)`,
              }}
            />
            <Helmet
              driver={driver}
              className="relative w-full max-w-md drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]"
            />
          </div>

          <div className="relative p-8 md:p-10 md:pl-4 flex flex-col justify-center">
            <div
              className="text-xs font-display tracking-[0.3em] uppercase mb-2"
              style={{ color: team.color }}
            >
              {team.fullName}
            </div>

            <div className="font-display text-white leading-none">
              <div className="text-3xl md:text-4xl text-white/60">
                {driver.firstName}
              </div>
              <div className="text-5xl md:text-6xl tracking-tight">
                {driver.lastName}
              </div>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <div
                className="font-display text-7xl md:text-8xl leading-none tabular-nums"
                style={{ color: team.color }}
              >
                {driver.number}
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm font-display tracking-widest uppercase">
                <span className="text-2xl">{driver.countryFlag}</span>
                <span>{driver.countryName}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-[10px] font-display tracking-[0.3em] uppercase text-white/40 mb-2">
                Design Notes
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                {driver.designNote}
              </p>
            </div>

            <div className="mt-6 flex gap-2">
              {[
                driver.helmet.primary,
                driver.helmet.secondary,
                driver.helmet.tertiary,
                driver.helmet.visor,
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex-1 h-10 rounded-md border border-white/10 relative overflow-hidden"
                  style={{ backgroundColor: c }}
                >
                  <div className="absolute bottom-1 left-1.5 right-1.5 text-[9px] font-mono text-white mix-blend-difference truncate">
                    {c.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
