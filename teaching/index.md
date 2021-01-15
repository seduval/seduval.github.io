---
layout: teaching
title: Teaching
permalink: /teaching/
---


<div class="row" id="blog-posts-container">
    <div class="col-lg-11 offset-md-1">
        <div class="card">
            <h1 class="card-title"> Teaching </h1>
            
            <div class="col-lg-8 offset-md-2">
                
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
                        {{course.description}}<a href='{{course.url}}' target="_blank" rel="noopener noreferrer"><img src="assets/img/goto.png"/></a>                        
                    </div>
                    {% endif %}
                </div>
                
            </div>
        </div>
        
    </div>
</div>
