---
layout: default
title: Teaching
permalink: /teaching/
summary: I teach at Bachelor and Masters degrees, in mathematics and computer science. I taught at Sorbonne Université / Université Pierre et Marie Curie in France, then at the Université Catholique de Louvain (UCLouvain) in Belgium, then at the Université of Versailles in France, and I now teach at the Université of Lorraine.
---


<div class="row" id="blog-posts-container">
    <div class="col-lg-11 offset-md-1">
        <div class="card">
            <h1 class="card-title" lang='en'> Teaching </h1>
            <h1 class="card-title" lang='fr'> Enseignement </h1>
            {%- for course in site.data.courses -%}
            <div class="card">
                <div class="row" style="text-align: center">
                    <div class="col-lg-2" style="display: inline-block">
                        {{-course.year-}}
                    </div>
                    <div lang='en' class="col-lg-3" style="display: inline-block">
                        {{-course.level-}}
                    </div>
                    <div lang='fr' class="col-lg-3" style="display: inline-block">
                        {{- course.level_fr -}}
                    </div>
                    <div class="col-lg-3" style="display: inline-block">
                        {{-course.university-}}
                    </div>
                    <div class="col-lg-3" style="display: inline-block">
                        <p lang='en'>{{-course.description-}}</p>
                        <p lang='fr'>{{-course.description_fr-}}</p>
                        <!--{% if site.fr %}
                        {{course.description_fr}}    
                        {% else %}
                        {{course.description}}
                        {% endif %}-->
                    </div>
                    <div class="col-lg-1" style="display: inline-block">
                        <a lang='en' href='{{course.url}}' rel="noopener noreferrer" target=_blank class="btn btn-dark btn-lg">Access</a>    
                        <a lang='fr' href='{{course.url}}' rel="noopener noreferrer" target=_blank class="btn btn-dark btn-lg">Accès</a>    
                    </div>
                </div>
            </div>
            {%- endfor -%}
        </div>
    </div>
</div>
