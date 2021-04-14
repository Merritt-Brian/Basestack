---
layout: post
title:  "Nextstrain"
date:   2021-03-31 15:26:36 -0400
categories: jekyll update
permalink: /pipelines/nextstrain
---

<strong>Requires Internet. Also available at https://nextstrain.org/ncov/global</strong>

After the app has generated consensus genomes from the previous 2 commands, you can view mutations or SNPs in your run by selecting the Nextstrain tab at the left-hand side. These mutations can be viewed around Page 11 or section 5.3

Let's go into our report we just generated and traverse to section 5.3 or page 10-11. The tables provided are all reported mutations against the reference.

![Step 1]({{site.baseurl}}/assets/img/nextstrain.PNG "Title")

- Position 18736 (for example) is a reported SNP for T to C mutation. The annotatin is a missense_variant (see all annotation types in the description of this figure for the report). Though nextstrain we can view this mutation across all samples available that have been sequences and input into nextstrain's website. 

![Step 2]({{site.baseurl}}/assets/img/nextstrain.PNG "Title")

- Now that we've selected our mutation to view let's move forward through the interactive site

![Step 3]({{site.baseurl}}/assets/img/nextstrainfiltered18736.png "Title")

To View a specific mutation (and this one for example) reported in the table, select underneath **Color By**

Genotype -> nucleotide -> [Your number here]

Also, be sure that the dataset is ncov and global. You can change the layout of the visualization(s) with the Tree Options parameters

<hr>