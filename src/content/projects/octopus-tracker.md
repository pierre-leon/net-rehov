---
title: Octopus Tariff Tracker
description: A personal web app comparing Octopus Energy's Agile, Go, and Cosy tariffs daily — built in a weekend to solve my own energy optimisation problem.
role: Solo Builder
year: "2025"
location: London, UK
website: https://octo-price-comparator.lovable.app/
heroImage: /images/projects/octopus-tracker/dashboard.png
gallery:
  - /images/projects/octopus-tracker/dashboard.png
featured: false
order: 3
category: experiments
icon: fa-solid fa-bolt-lightning
tags:
  - Energy
  - Personal Project
  - API
  - Built with Lovable
---

I discovered Octopus Energy's Agile tariff and became fascinated with real-time energy pricing — half-hourly rates that follow wholesale electricity prices, sometimes going negative. I started manually comparing tariffs to understand whether I was on the right one. Then I built an app to do it properly.

## What it does

**Tomorrow view** — Compares Agile, Go, and Cosy tariffs using published rates (or Agile Predict if tomorrow's rates aren't out yet). Consumption is averaged over the last 30 days to give a realistic cost comparison.

**Today (live) view** — Compares Agile and Go in real time, switching between half-hourly and 10-second intervals. Requires an Octopus Home Mini installed.

Your data stays local. The API key never leaves your device.

## Why I built it

Mass adoption of time-of-use tariffs requires removing complexity — not expecting consumers to become energy analysts. I built this for myself first, then shared it publicly via Reddit and the Octopus Energy community. The response made clear there's real demand for this kind of tool.

Built with Lovable. [Try it →](https://octo-price-comparator.lovable.app/)
