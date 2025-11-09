---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

* <strong> Temporal Object-Aware Vision Transformer for Few-Shot Video Object Detection </strong> <br>
  <strong>Yogesh Kumar</strong>, Anand Mishra<br>
  AAAI 2026 <br>

* <strong>Aligning Moments in Time using Video Queries</strong> <br>
  <strong>Yogesh Kumar</strong>, Uday Agarwal, Manish Gupta, Anand Mishra<br>
  ICCV 2025 <br>
<a href="https://github.com/vl2g/MATR/blob/main/assets/kumar_iccv25.pdf">[Paper] </a> | <a href="https://github.com/vl2g/MATR.git">[Code]</a> | <a href="https://github.com/vl2g/MATR/tree/main/sportsmoments">[Data] <br>

* <strong>Language-Guided Temporal Token Pruning for Efficient VideoLLM Processing</strong> <br>
  <strong>Yogesh Kumar</strong><br>
  EMNLP 2025 <br>
<a href="https://aclanthology.org/2025.emnlp-main.451.pdf">[Paper] </a> | <a href="https://github.com/yogesh-iitj/LGTTP">[Code]</a>  <br>

* <strong>Chapter-Based Video Moment Retrieval using Natural Language Queries</strong> <br>
  Uday Agarwal,  <strong>Yogesh Kumar</strong>,  Abu Shahid, Prajwal Gatti, Manish Gupta, Anand Mishra <br>
  ICVGIP 2024 <br>
  <a href="https://drive.google.com/file/d/143odnhV4CljwX8Y8hZAPThkLbEVJtEdv/view?usp=sharing">[Paper]</a> | <a href="https://github.com/vl2g/ChapVidMR">[Code]</a> | <a href="https://github.com/vl2g/ChapVidMR/tree/main/data">[Data]</a> <br>
  
* <strong>QDETRv: Query-Guided DETR for One-Shot Object Localization in Videos</strong> <br>
  <strong>Yogesh Kumar</strong>, Saswat Mallick, Anand Mishra, Sowmya Rasipuram, Anutosh Maitra, and Roshni Ramnani <br>
  AAAI 2024 <br>
  <a href="https://ojs.aaai.org/index.php/AAAI/article/view/28063">[Paper]</a> | <a href="https://github.com/yogesh-iitj/QDETRV">[Code]</a> | <a href="https://yogesh-iitj.github.io/QDETRV/">[Project]</a> <br>

* <strong>Few-Shot Referring Relationships in Videos</strong> <br>
   <strong>Yogesh Kumar</strong>, Anand Mishra <br>
  CVPR 2023 <br>
  <a href="https://openaccess.thecvf.com/content/CVPR2023/papers/Kumar_Few-Shot_Referring_Relationships_in_Videos_CVPR_2023_paper.pdf">[Paper]</a> | <a href="https://vl2g.github.io/projects/refRelations/">[Code]</a> | <a href="https://vl2g.github.io/projects/refRelations/">[Project]</a> <br>

* <strong>Towards Making Flowchart Images Machine Interpretable</strong> <br>
  Shreya Shukla, Prajwal Gatti, <strong>Yogesh Kumar</strong>, Vikash Yadav, Anand Mishra <br>
  ICDAR 2023 <br>
  <a href="https://vl2g.github.io/projects/floco/docs/FLOCO-ICDAR2023.pdf">[Paper]</a> | <a href="https://github.com/vl2g/floco">[Code]</a> | <a href="https://vl2g.github.io/projects/floco/">[Project]</a> <br>


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
