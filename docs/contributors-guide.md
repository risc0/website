# Contributor's Guide
*This page describes guidelines for community contributions to this [website](https://www.github.com/risc0/website); you may also be interested in contributing to the [main project codebase](https://github.com/risc0/risc0) or to the [examples repo](https://github.com/risc0/risc0-rust-examples).* 

>`RISC Zero welcomes community participation!`
>- Contribute content or corrections via  [`PRs`](https://github.com/risc0/website/pulls) 
>- Make suggestions or report bugs via  [`GitHub issues`](https://github.com/risc0/website/issues)
>- Ask questions on  [`Discord`](https://discord.gg/risczero)

## How To Contribute
- You'll need a [GitHub Account](https://github.com/) to contribute. 
- You can suggest an edit directly via the `Edit this Page` button at the bottom of each page. 
- To create a new page, you can use the [GitHub browser interface](https://www.github.com/risc0/website); the content is in `pages` and `docs`. 
  - Please read about [the navbar and sidebars](./contributors-guide.md#navbar-and-sidebars) and [categories of documentation](./contributors-guide.md#categories-of-documentation) before creating a new page.
- If you want to clone the repo and work locally, you may want to check out the [Docusaurus documentation](https://docusaurus.io/docs/installation). We like to use `yarn start` to run a local build, especially when we're working with changes that involve links or sidebars. 

## Style Guidelines
Our objective in organizing website content is that anyone who finds their way to any RISC Zero content is able to rapidly find their way to the material suits their needs. 

In order to achieve this objective, we rely on:

>- Clear Headers: We head each document with a succinct statement of purpose and pointers to related content.
>- Single Purpose Docs: We avoid repeating ourselves and keep content digestible by splitting long docs into smaller chunks
>- Progressive Disclosure: We aim to start simple and clear, offering opt-in paths toward higher levels of technicality. 
>- Lots of Pointers: We keep materials succinct by linking to pre-requisite knowledge and splitting behemoth docs into modular components.
>- Consistent, Clear, and Accessible Terminology: We write precisely without providing unnecessary technical obstacles. 

## Terminology
We encourage conversation and questions about nomenclature/terminology. Please let us know when you encounter terms that don't seem quite right. 
- Officially established terminology is [here](key-terminology.md). 
- Ongoing terminology and naming discussions are [TODO where?]

## Navbar and Sidebars
- The navbar is defined in `docusaurus.config.js`. Any changes require manual configuration.
  - [Navbar documentation](https://docusaurus.io/docs/api/themes/configuration)
- The sidebars are defined in `sidebars.js`. Any changes outside of `docs/reference-docs`, `docs/explainers/zkp`, or `docs/explainers/zkvm` require manual configuration.
  - [Sidebar documentation](https://docusaurus.io/docs/sidebar)

## Categories of Documentation
We organize our docs into 4 categories, as per [the Divio documentation guidelines](https://documentation.divio.com). 
- Reference docs and explainers live on this site under `docs/reference-docs` and `docs/explainers`. 
- Tutorials & how-to guides live on Github [TODO where should we be linking to?] 

### Reference Docs
We typically organize reference docs according to the following sections; we use `About NTTs` as a template. 

>**Topic**
>
>*Topic is used to [concise explanation of relevance to RISC Zero]*
>- Documentation
>- Basic Function 
>- Content 1 
>- Content 2
>- Content 3
>- Suggested Reading 
  
*Changes to this organization can be proposed via a PR to this page or via [Github Issue link]*

### Explainer Docs
Our explainer docs are currently split into `zkVM Explainers` and `ZKP Explainers`. Explainers contain clearly articulated goals in the header, as well as pointers to related content. 

## Thank you! 
We're excited about the engagement we've seen so far, and we're looking forward to building a vibrant community together.

## Questions?
Find us on [Discord](https://discord.gg/risczero). 