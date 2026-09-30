---
title: Agentic Conversational Analytics
company: Collinson Group
period: 2023 — Present
role: Architect & engineering lead
order: 1
featured: true
summary: Natural-language access to enterprise data — an agent that plans, grounds itself in Snowflake metadata, writes and safely executes SQL, and answers finance and analytics teams in seconds.
lens: [architect, lead, deploy]
tags: [LangGraph, LangChain, Snowflake, LLMs, Python, Secure SQL]
outcomes:
  - value: "~30%"
    label: analyst productivity gain
  - value: "NL → SQL"
    label: self-serve data access
flow:
  - label: Question
    detail: Plain-English ask from finance or analytics
  - label: Planner agent
    detail: LangGraph orchestration
  - label: Metadata grounding
    detail: Snowflake schema & business context
  - label: Secure SQL
    detail: Generated, validated, read-only
  - label: Answer
    detail: Numbers, tables and narrative
---

## Context

Finance and analytics teams depended on a small group of data specialists to answer everyday questions. Every new question meant a ticket, a queue, and a handful of SQL written by someone else.

## The challenge

Letting people talk to enterprise data is easy to demo and hard to trust. The system had to understand the business's own vocabulary, produce correct SQL against a real warehouse, and never become a new way to leak or damage data.

## What I did

- **Architected the platform end-to-end**: an agentic workflow built with LangChain and LangGraph that plans a question, gathers context and decides which tools to call.
- **Grounded the model in Snowflake metadata**, so generated queries use the right tables, columns and business definitions instead of guessing.
- **Designed secure SQL execution** as a first-class concern — generated queries are validated and run with controlled access.
- **Led the team** that took it from prototype to a production service used by finance and analytics teams.

## Outcome

Analysts got self-serve, natural-language access to their data, improving analyst productivity by **~30%** and freeing the data team for deeper work.
