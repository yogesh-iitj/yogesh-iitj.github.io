---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
<!-- TEMP WAY -->

* <strong>Chapter-Based Video Moment Retrieval using Natural Language Queries</strong> <br>
  <strong>Yogesh Kumar\*</strong>, Uday Agarwal\*, Abu Shahid\*, Prajwal Gatti, Manish Gupta, Anand Mishra <br>
  (\*equally contributed) <br>
  ICVGIP 2024 <br>

* <strong>QDETRv: Query-Guided DETR for One-Shot Object Localization in Videos</strong> <br>
  Yogesh Kumar, Saswat Mallick, Anand Mishra, Sowmya Rasipuram, Anutosh Maitra, and Roshni Ramnani <br>
  AAAI 2024 <br>
  
* <strong>Few-Shot Referring Relationships in Videos</strong> <br>
  Yogesh Kumar, Anand Mishra <br>
  CVPR 2023 <br>
  
* <strong>Towards Making Flowchart Images Machine Interpretable</strong> <br>
  Shreya Shukla, Prajwal Gatti, Yogesh Kumar, Vikash Yadav, Anand Mishra <br>
  ICDAR 2023 <br>
  
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
