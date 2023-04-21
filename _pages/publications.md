---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
<!-- TEMP WAY -->

* <strong>Few-Shot Referring Relationships in Videos</strong> <br>
  <strong>Yogesh Kumar</strong>, Anand Mishra,
  <br>
  CVPR 2023 <br>
  
* <strong>Towards Making Flowchart Images Machine Interpretable</strong> <br>
  Shreya Shukla, Prajwal Gatti, <strong>Yogesh Kumar</strong>, Vikash Yadav, Anand Mishra,
  <br>
  ICDAR 2023
  
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
