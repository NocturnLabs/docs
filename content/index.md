---
seo:
  title: NocturnLabs Documentation
  description: Documentation for NocturnLabs developer tools and automation projects.
---

::u-page-hero{class="dark:bg-gradient-to-b from-zinc-900 to-zinc-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
[NocturnLabs]{.text-primary} Developer Tools.

#description
Open-source automation tools for developers. Build faster with our scaffolding, prompt generation, and autonomous coding solutions.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get Started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/NocturnLabs
  target: _blank
  ---
  View on GitHub
  :::

#default
  :::prose-pre
  ---
  code: |
    # Initialize a new project
    scaffold init my-project
    
    # Generate AI prompts
    promptgen create
    
    # Autonomous coding
    opencode auto-init
  filename: terminal
  ---

  ```bash
  # Initialize a new project
  scaffold init my-project
  
  # Generate AI prompts
  promptgen create
  
  # Autonomous coding
  opencode auto-init
  ```
  :::
::

::u-page-section{class="dark:bg-zinc-950"}
#title
Our Projects

#links
  :::u-button
  ---
  color: neutral
  size: lg
  to: /projects
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  View All Projects
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-layout-dashboard
  ---
  #title
  OpenCode Console

  #description
  Web-based observability dashboard for OpenCode agents. Real-time monitoring, interactive diffs, and session management.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-workflow
  ---
  #title
  OpenCode Conductor

  #description
  Context-Driven Development plugin. Ground AI agents in your project's mission, tech stack, and coding standards.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bot
  ---
  #title
  OpenCode Forger

  #description
  Autonomous coding agent that implements features from specifications. Continuous development without manual intervention.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  Personal Knowledge

  #description
  Dual-interface knowledge management with semantic vector search. Store and retrieve knowledge for AI agents.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-package
  ---
  #title
  Scaffold

  #description
  Project scaffolding CLI. Generate boilerplate for Rust, Go, TypeScript, and more with customizable templates.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-commit
  ---
  #title
  Commit Message

  #description
  Generate conventional commit messages automatically using AI analysis of your staged changes.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-zinc-950 to-zinc-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Get Started
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/NocturnLabs'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to automate your workflow?
  description: Start building with NocturnLabs tools. Open source, developer-focused, and built for the modern stack.
  class: dark:bg-zinc-950
  ---

  :stars-bg
  :::
::
