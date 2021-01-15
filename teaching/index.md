---
layout: default
title: Teaching
permalink: /teaching/
---


<div class="row" id="blog-posts-container">
    <div class="col-lg-11 offset-md-1">
        <div class="card">
            <h1 class="card-title"> Teaching </h1>
            <div class="row">
                {% for course in site.data.courses %}
                <div class="col-lg-2">
                    {{course.year}}
                </div>
                <div class="col-lg-3">
                    {{course.level}}
                </div>
                <div class="col-lg-3">
                    {{course.university}}
                </div>
                <div class="col-lg-4">
                    {{course.description}}<a href='{{course.url}}' rel="noopener noreferrer" target=_blank class="btn btn-dark btn-lg">Access</a>                        
                </div>
                {% endfor %}
            </div>
        </div>
        
    </div>
</div>
