---
layout: default
title: Teaching
permalink: /teaching/
---


<div class="row" id="blog-posts-container">
    <div class="col-lg-11 offset-md-1">
        <div class="card">
            <h1 class="card-title"> Teaching </h1>
            {% for course in site.data.courses %}
            <div class="card">
                <div class="row" style="text-align: center">
                    <div class="col-lg-2" style="display: inline-block">
                        {{course.year}}
                    </div>
                    <div class="col-lg-3" style="display: inline-block">
                        {{course.level}}
                    </div>
                    <div class="col-lg-3" style="display: inline-block">
                        {{course.university}}
                    </div>
                    <div class="col-lg-3" style="display: inline-block">
                        <p lang='en'>{{course.description}}</p>
                        <p lang='fr'>{{course.description_fr}}</p>
                        <!--{% if site.fr %}
                        {{course.description_fr}}    
                        {% else %}
                        {{course.description}}
                        {% endif %}-->
                    </div>
                    <div class="col-lg-1" style="display: inline-block">
                        <a href='{{course.url}}' rel="noopener noreferrer" target=_blank class="btn btn-dark btn-lg">Access</a>                        
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>
