---
title: Real-time Fraud Detection & Personalisation
company: OCBC Bank
period: "2022"
role: Senior data scientist & commercialization product lead
order: 3
featured: false
summary: Scalable ML services for a regulated bank — batch and low-latency online inference powering fraud screening and personalised product recommendations for millions of customers.
lens: [architect, deploy]
tags: [Spark, Ray, AWS, Stream processing, Deep learning, Recommender systems]
outcomes:
  - value: "~70%"
    label: pipeline efficiency gain
  - value: "Batch + online"
    label: inference in one design
flow:
  - label: Transactions & events
    detail: Streaming and batch data
  - label: Features
    detail: Distributed on Spark & Ray
  - label: Models
    detail: Fraud scoring · recommendations
  - label: Serving
    detail: Low-latency APIs + batch jobs
  - label: Banking systems
    detail: Customer-facing & core banking
---

## Context

The bank needed ML decisions — is this transaction fraudulent, what should this customer see next — delivered reliably into customer-facing and core banking systems, at petabyte data scale.

## The challenge

Two very different latency profiles (real-time screening and large batch recommendation runs), strict regulatory expectations on auditability, and integration with systems that cannot go down.

## What I did

- **Designed scalable ML services** supporting both batch and low-latency online inference on Spark, Ray and AWS.
- **Built fraud-detection and anti-phishing capabilities** for real-time transaction screening, alongside a **product-recommendation framework** for millions of customers.
- **Integrated ML decisions** into customer-facing and core banking systems through well-defined service interfaces and API contracts.
- **Introduced CI/CD, observability and production-readiness practices** so releases were auditable and reliable in a regulated environment.

## Outcome

Pipeline efficiency improved by **~70%**, and ML became a dependable, auditable part of production banking systems.
